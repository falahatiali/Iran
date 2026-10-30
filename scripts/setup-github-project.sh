#!/usr/bin/env bash
# GitHub Project Bootstrap Script - Bash 3.2 compatible
# Repository: falahatiali/Iran
# Project: Iiraan — Historical Research & Development

set -euo pipefail

REPO_OWNER="falahatiali"
REPO_NAME="Iran"
PROJECT_TITLE="Iiraan — Historical Research & Development"
PROJECT_DESCRIPTION="A public roadmap for building Iiraan: an independent, evidence-driven exploration of Iranian history, civilization, culture, mythology, and historical narratives."
DRY_RUN=false
SKIP_PROJECT=false

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1" >&2; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1" >&2; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1" >&2; }
log_error() { echo -e "${RED}[ERROR]${NC} $1" >&2; }
log_step() { echo -e "${CYAN}[STEP]${NC} $1" >&2; }

print_op() {
    if [ "$DRY_RUN" = true ]; then
        echo -e "${YELLOW}[DRY-RUN]${NC} $1" >&2
    else
        log_info "$1"
    fi
}

while [ $# -gt 0 ]; do
    case "$1" in
        --dry-run)
            DRY_RUN=true
            log_warn "Running in dry-run mode - no changes will be made"
            shift
            ;;
        --skip-project)
            SKIP_PROJECT=true
            log_warn "Skipping project creation/check (insufficient scopes)"
            shift
            ;;
        *)
            log_error "Unknown argument: $1"
            exit 1
            ;;
    esac
done

# Retry helper
retry_cmd() {
    local max_attempts=3
    local attempt=1
    local delay=1
    local cmd="$1"
    
    while [ $attempt -le $max_attempts ]; do
        if eval "$cmd"; then
            return 0
        fi
        if [ $attempt -eq $max_attempts ]; then
            return 1
        fi
        log_warn "Attempt $attempt failed, retrying in ${delay}s..."
        sleep $delay
        delay=$((delay * 2))
        attempt=$((attempt + 1))
    done
}

check_deps() {
    log_info "Checking dependencies..."
    command -v gh >/dev/null 2>&1 || { log_error "GitHub CLI (gh) required"; exit 1; }
    command -v jq >/dev/null 2>&1 || { log_error "jq required"; exit 1; }
    command -v curl >/dev/null 2>&1 || { log_error "curl required"; exit 1; }
    log_success "Dependencies OK"
}

check_auth() {
    log_info "Checking GitHub authentication..."
    if ! gh auth status >/dev/null 2>&1; then
        log_error "Not authenticated. Run: gh auth login"
        log_info "Or set GH_TOKEN environment variable"
        exit 1
    fi
    
    # Get user from auth status output (more reliable than API call)
    local auth_output
    auth_output=$(gh auth status 2>&1)
    local user
    user=$(echo "$auth_output" | grep "Logged in to" | sed -E 's/.*Logged in to github.com account ([^ ]+).*/\1/' || echo "unknown")
    
    if [ -z "$user" ] || [ "$user" = "unknown" ]; then
        # Fallback to API call
        user=$(gh api user --jq .login 2>/dev/null || echo "unknown")
    fi
    
    log_info "Authenticated as: $user"
    if [ "$user" != "$REPO_OWNER" ] && [ "$user" != "unknown" ]; then
        log_warn "Authenticated user ($user) != repo owner ($REPO_OWNER)"
        log_warn "Project creation may require ownership"
    fi
    log_success "Authentication OK"
    
    # Check scopes
    local scopes
    scopes=$(gh auth status --show-token 2>&1 | grep "Token scopes" | sed 's/.*Token scopes: *//' || echo "")
    if ! echo "$scopes" | grep -q "read:project"; then
        log_warn "Token missing 'read:project' scope - project operations will be skipped"
        log_warn "Create token at https://github.com/settings/tokens with 'read:project' and 'project' scopes"
        SKIP_PROJECT=true
    fi
}

check_repo() {
    log_info "Checking repository access..."
    if ! retry_cmd "gh repo view \"$REPO_OWNER/$REPO_NAME\" >/dev/null 2>&1"; then
        log_error "Cannot access $REPO_OWNER/$REPO_NAME"
        log_error "Check network connection and repository permissions"
        exit 1
    fi
    log_success "Repository access OK"
}

get_user_id() {
    local result
    if result=$(gh api graphql -f query='query { user(login: "falahatiali") { id } }' --jq .data.user.id 2>/dev/null); then
        echo "$result"
    else
        log_error "Failed to get user ID"
        echo ""
    fi
}

find_project() {
    log_info "Searching for existing project..."
    
    if [ "$SKIP_PROJECT" = true ]; then
        log_warn "Skipping project search due to missing scopes"
        echo ""
        return 0
    fi
    
    local result
    if ! result=$(gh api graphql -f query='query { user(login: "'"$REPO_OWNER"'") { projectsV2(first: 100) { nodes { id title } } } }' --jq .data.user.projectsV2.nodes 2>/dev/null); then
        log_warn "GraphQL query failed or timed out"
        log_warn "Assuming no existing project due to API error"
        echo ""
        return 0
    fi
    
    if ! echo "$result" | jq empty >/dev/null 2>&1; then
        log_warn "Invalid GraphQL response"
        echo ""
        return 0
    fi
    
    local id
    id=$(echo "$result" | jq -r --arg title "$PROJECT_TITLE" '.[] | select(.title == $title) | .id // empty' 2>/dev/null || true)
    
    if [ -n "$id" ] && [ "$id" != "null" ]; then
        log_success "Found existing project: $PROJECT_TITLE"
        echo "$id"
    else
        log_info "No existing project found"
        echo ""
    fi
}

create_project() {
    log_info "Creating project..."
    local user_id
    user_id=$(get_user_id)
    
    if [ -z "$user_id" ] || [ "$user_id" = "null" ]; then
        log_error "Cannot get user ID"
        exit 1
    fi
    
    if [ "$DRY_RUN" = true ]; then
        print_op "Create project: $PROJECT_TITLE"
        echo "dry-run-project-id"
        return
    fi
    
    if [ "$SKIP_PROJECT" = true ]; then
        log_warn "Skipping project creation due to missing scopes"
        echo ""
        return
    fi
    
    local mutation='mutation($input: CreateProjectV2Input!) { createProjectV2(input: $input) { projectV2 { id number title url } } }'
    local result
    local attempts=0
    local max_attempts=3
    
    while [ $attempts -lt $max_attempts ]; do
        if result=$(gh api graphql -f query="$mutation" -F input=\{\"ownerId\":\"$user_id\",\"title\":\"$PROJECT_TITLE\",\"description\":\"$PROJECT_DESCRIPTION\",\"public\":true\} --jq .data.createProjectV2.projectV2.id 2>/dev/null); then
            if [ -n "$result" ] && [ "$result" != "null" ]; then
                log_success "Created project: $PROJECT_TITLE (ID: $result)"
                echo "$result"
                return
            fi
        fi
        attempts=$((attempts + 1))
        if [ $attempts -lt $max_attempts ]; then
            log_warn "Project creation attempt $attempts failed, retrying..."
            sleep $((attempts * 2))
        fi
    done
    
    log_error "Failed to create project after $max_attempts attempts"
    exit 1
}

create_milestones() {
    log_step "Repository Milestones"
    
    local milestones_data=(
        "Research & Editorial Framework v1:Establishing research methodology, source evaluation criteria, and editorial framework for historical research"
        "Shahnameh Digital Experience v1:Digital presentation of Shahnameh content with proper academic sourcing"
        "Historical Investigations v1:Systematic investigations into historical events with evidence-based analysis"
        "Primary Sources Library v1:Comprehensive library of primary sources with provenance tracking"
        "Historical Atlas v1:Interactive historical atlas with accurate temporal and spatial data"
        "Iiraan Platform v1:Initial platform release with core features"
    )
    
    local i
    for i in "${!milestones_data[@]}"; do
        local entry="${milestones_data[$i]}"
        local title="${entry%%:*}"
        local desc="${entry#*:}"
        
        if [ "$DRY_RUN" = true ]; then
            print_op "Check milestone: $title"
            print_op "Create milestone: $title"
            continue
        fi
        
        local exists
        if ! exists=$(gh api repos/$REPO_OWNER/$REPO_NAME/milestones --jq "[.[] | select(.title==\"$title\")] | length" 2>/dev/null); then
            exists=0
        fi
        
        if [ "$exists" -gt 0 ]; then
            log_info "Milestone exists: $title"
            continue
        fi
        
        log_info "Creating milestone: $title"
        if ! gh api repos/$REPO_OWNER/$REPO_NAME/milestones \
            --method POST \
            --field title="$title" \
            --field description="$desc" \
            --field state="open" >/dev/null 2>&1; then
            log_warn "Failed to create milestone: $title"
        fi
    done
    log_success "Milestones processed"
}

create_labels() {
    log_step "Repository Labels"
    
    local labels_data=(
        "research:0366d6"
        "content:22863a"
        "feature:a2eeef"
        "enhancement:84b6eb"
        "bug:d73a4a"
        "documentation:0075ca"
        "infrastructure:6a737d"
        "needs-source:ffcc00"
        "fact-check:ff6b6b"
        "conflicting-sources:ff9f43"
        "needs-review:6c5ce7"
        "uncertain-evidence:fd79a8"
        "primary-source:00b894"
        "good first issue:7057ff"
        "help wanted:008672"
        "blocked:d73a4a"
    )
    
    local i
    for i in "${!labels_data[@]}"; do
        local entry="${labels_data[$i]}"
        local name="${entry%%:*}"
        local color="${entry#*:}"
        
        if [ "$DRY_RUN" = true ]; then
            print_op "Check label: $name"
            print_op "Create label: $name ($color)"
            continue
        fi
        
        local exists
        if ! exists=$(gh api repos/$REPO_OWNER/$REPO_NAME/labels --jq "[.[] | select(.name==\"$name\")] | length" 2>/dev/null); then
            exists=0
        fi
        
        if [ "$exists" -gt 0 ]; then
            log_info "Label exists: $name"
            continue
        fi
        
        log_info "Creating label: $name"
        if ! gh api repos/$REPO_OWNER/$REPO_NAME/labels \
            --method POST \
            --field name="$name" \
            --field color="$color" \
            >/dev/null 2>&1; then
            log_warn "Failed to create label: $name"
        fi
    done
    log_success "Labels processed"
}

create_issues() {
    log_step "Initial Issues"
    
    local issues_data=(
        "Define Iiraan's Historical Research Methodology|research,needs-review|Research & Editorial Framework v1"
        "Establish Historical Source Evaluation Criteria|research,fact-check|Research & Editorial Framework v1"
        "Define Evidence and Interpretation Classification|research,content|Research & Editorial Framework v1"
        "Design Shahnameh Content Architecture|content,feature|Shahnameh Digital Experience v1"
        "Research Authoritative Shahnameh Editions|research,primary-source|Shahnameh Digital Experience v1"
        "Design Historical Investigation Dossier Structure|feature,research|Historical Investigations v1"
        "Define Historical Source Provenance Model|infrastructure,research|Primary Sources Library v1"
        "Audit Existing Achaemenid Historical Content|research,fact-check|Research & Editorial Framework v1"
        "Review Existing Historical Citations|documentation,needs-review|Research & Editorial Framework v1"
        "Define Persian and English Content Standards|documentation|Research & Editorial Framework v1"
    )
    
    local i
    for i in "${!issues_data[@]}"; do
        local entry="${issues_data[$i]}"
        local title="${entry%%|*}"
        local rest="${entry#*|}"
        local labels="${rest%%|*}"
        local milestone="${rest#*|}"
        
        if [ "$DRY_RUN" = true ]; then
            print_op "Check issue: $title"
            print_op "Create issue: $title"
            continue
        fi
        
        local exists
        if ! exists=$(gh issue list --repo "$REPO_OWNER/$REPO_NAME" --search "$title" --json number --jq '.[0].number' 2>/dev/null); then
            exists=""
        fi
        
        if [ -n "$exists" ] && [ "$exists" != "null" ]; then
            log_info "Issue exists: $title (#$exists)"
            continue
        fi
        
        log_info "Creating issue: $title"
        if ! gh issue create \
            --repo "$REPO_OWNER/$REPO_NAME" \
            --title "$title" \
            --body "## Context

This issue is part of the Iiraan historical research and development project.
Project: Iiraan — Historical Research & Development

## Objective

Define and establish standards for $title.

## Scope

- Research requirements definition
- Evidence standards establishment
- Documentation and guidelines creation
- Review process establishment

## Acceptance Criteria

- [ ] Research requirements documented
- [ ] Evidence standards established
- [ ] Documentation complete and reviewed
- [ ] Implementation guidelines created
- [ ] Stakeholder review completed

## Research Requirements

Where applicable, identify primary sources, scholarly references, and evidence needed for validation.

### Historical Evidence

Document what sources establish, keeping three-layer separation:
- Historical evidence (what sources establish)
- Philosophical interpretation (theory of rights/ownership)
- Modern cultural meaning (reception and memory)

### Sources

Do not invent historical facts or sources. Reference verified materials only.

---
*Generated by GitHub Project bootstrap script*
*Project: Iiraan — Historical Research & Development*" \
            --label "$labels" \
            --milestone "$milestone" >/dev/null 2>&1; then
            log_warn "Failed to create issue: $title"
        fi
    done
    log_success "Issues processed"
}

print_manual_steps() {
    log_warn "Manual configuration required"
    echo ""
    echo "The following require manual setup via GitHub UI due to GraphQL limitations:"
    echo ""
    echo "1. STATUS FIELD"
    echo "   - Create Status single-select field"
    echo "   - Options in order: Backlog, Ready, In Progress, In Review, Done"
    echo ""
    echo "2. CUSTOM FIELDS"
    echo "   - Workstream (single select):"
    echo "     Historical Research, Historical Content, Shahnameh, Historical Investigations, Primary Sources, Product & Experience, Engineering"
    echo "   - Priority (single select):"
    echo "     P0 - Critical, P1 - High, P2 - Medium, P3 - Low"
    echo "   - Era (single select):"
    echo "     Prehistoric, Elamite, Median, Achaemenid, Seleucid, Parthian, Sasanian, Early Islamic, Medieval, Early Modern, Modern, Contemporary, Mythological / Legendary, Cross-Era / Unknown"
    echo "   - Effort (single select):"
    echo "     Small, Medium, Large, Research-intensive"
    echo ""
    echo "3. PROJECT VIEWS"
    echo "   - Development Board: Board layout, Group by Status"
    echo "   - Historical Coverage: Table layout, Group by Era"
    echo "   - Strategic Roadmap: Board layout, Group by Milestone"
    echo "   - Research & Investigations: Table layout, Filter to Workstream"
    echo ""
    echo "4. LINK PROJECT TO REPOSITORY"
    echo "   - In project settings, connect to falahatiali/Iran"
    echo ""
}

main() {
    log_info "=== GitHub Project Bootstrap ==="
    log_info "Repository: $REPO_OWNER/$REPO_NAME"
    log_info "Project: $PROJECT_TITLE"
    echo ""
    
    check_deps
    check_auth
    check_repo
    echo ""
    
    local project_id="skipped"
    if [ "$SKIP_PROJECT" != true ]; then
        project_id=$(find_project)
        
        if [ -z "$project_id" ] || [ "$project_id" = "null" ]; then
            project_id=$(create_project)
        else
            log_info "Using existing project: $project_id"
        fi
    else
        log_warn "Project operations skipped - using REST API only"
    fi
    
    echo ""
    create_milestones
    echo ""
    create_labels
    echo ""
    create_issues
    echo ""
    
    log_success "=== Bootstrap Complete ==="
    echo ""
    echo "Project ID: $project_id"
    echo "Repository: https://github.com/$REPO_OWNER/$REPO_NAME"
    echo ""
    
    print_manual_steps
    
    if [ "$DRY_RUN" = true ]; then
        log_warn "DRY RUN MODE - No changes were made"
    fi
}

main "$@"
