#!/usr/bin/env bash
set -euo pipefail

# GitHub Project Bootstrap Script
# Repository: falahatiali/Iran
# Project: Iiraan — Historical Research & Development
#
# SAFETY: Idempotent, never deletes, checks existence before creation
# Requirements: gh CLI, jq, curl

REPO_OWNER="falahatiali"
REPO_NAME="Iran"
PROJECT_TITLE="Iiraan — Historical Research & Development"
PROJECT_DESCRIPTION="A public roadmap for building Iiraan: an independent, evidence-driven exploration of Iranian history, civilization, culture, mythology, and historical narratives."
DRY_RUN=false

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_step() { echo -e "${CYAN}[STEP]${NC} $1"; }

print_op() {
    if [[ "$DRY_RUN" == true ]]; then
        echo -e "${YELLOW}[DRY-RUN]${NC} $1"
    else
        log_info "$1"
    fi
}

while [[ $# -gt 0 ]]; do
    case $1 in
        --dry-run)
            DRY_RUN=true
            log_warn "Running in dry-run mode - no changes will be made"
            shift
            ;;
        *)
            log_error "Unknown argument: $1"
            exit 1
            ;;
    esac
done

check_deps() {
    log_info "Checking dependencies..."
    command -v gh >/dev/null || { log_error "GitHub CLI (gh) required"; exit 1; }
    command -v jq >/dev/null || { log_error "jq required"; exit 1; }
    command -v curl >/dev/null || { log_error "curl required"; exit 1; }
    log_success "Dependencies OK"
}

check_auth() {
    log_info "Checking GitHub authentication..."
    if ! gh auth status >/dev/null 2>&1; then
        log_error "Not authenticated. Run: gh auth login"
        log_info "Or set GH_TOKEN environment variable"
        exit 1
    fi
    local user
    user=$(gh api user --jq .login 2>/dev/null || echo "unknown")
    log_info "Authenticated as: $user"
    if [[ "$user" != "$REPO_OWNER" ]]; then
        log_warn "Authenticated user ($user) != repo owner ($REPO_OWNER)"
        log_warn "Project creation may require ownership"
    fi
    log_success "Authentication OK"
}

check_repo() {
    log_info "Checking repository access..."
    if ! gh repo view "$REPO_OWNER/$REPO_NAME" >/dev/null 2>&1; then
        log_error "Cannot access $REPO_OWNER/$REPO_NAME"
        exit 1
    fi
    log_success "Repository access OK"
}

get_user_id() {
    gh api graphql -f query='query { user(login: "falahatiali") { id } }' --jq .data.user.id
}

find_project() {
    log_info "Searching for existing project..."
    local query='query($owner: String!) { user(login: $owner) { projectsV2(first: 100) { nodes { id title number } } } }'
    local result
    result=$(echo "{\"query\":\"query(\$owner: String!) { user(login: \$owner) { projectsV2(first: 100) { nodes { id title number } } } }\",\"variables\":{\"owner\":\"$REPO_OWNER\"}}" | gh api graphql --silent | jq -c .)
    local id
    id=$(echo "$result" | jq -r '.data.user.projectsV2.nodes[] | select(.title=="'$PROJECT_TITLE'") | .id // empty')
    if [[ -n "$id" && "$id" != "null" ]]; then
        log_success "Found existing project: $PROJECT_TITLE"
        echo "$id"
    else
        echo ""
    fi
}

create_project() {
    log_info "Creating project..."
    local user_id
    user_id=$(get_user_id)
    
    if [[ "$DRY_RUN" == true ]]; then
        print_op "Create project: $PROJECT_TITLE"
        echo "dry-run-project-id"
        return
    fi
    
    # Create project via GraphQL
    local mutation='mutation($input: CreateProjectV2Input!) { createProjectV2(input: $input) { projectV2 { id number title url } } }'
    local input_json
    input_json=$(jq -n --arg ownerId "$user_id" --arg title "$PROJECT_TITLE" --arg desc "$PROJECT_DESCRIPTION" \
        '{ownerId: $ownerId, title: $title, description: $desc, public: true}')
    
    local result
    result=$(gh api graphql -f query="$mutation" -f input="$input_json" --jq '.data.createProjectV2.projectV2.id')
    
    if [[ -z "$result" || "$result" == "null" ]]; then
        log_error "Failed to create project"
        exit 1
    fi
    
    log_success "Created project: $PROJECT_TITLE (ID: $result)"
    echo "$result"
}

create_milestones() {
    log_step "Repository Milestones"
    
    declare -A milestones
    milestones=(
        ["Research & Editorial Framework v1"]="Establishing research methodology, source evaluation criteria, and editorial framework for historical research"
        ["Shahnameh Digital Experience v1"]="Digital presentation of Shahnameh content with proper academic sourcing"
        ["Historical Investigations v1"]="Systematic investigations into historical events with evidence-based analysis"
        ["Primary Sources Library v1"]="Comprehensive library of primary sources with provenance tracking"
        ["Historical Atlas v1"]="Interactive historical atlas with accurate temporal and spatial data"
        ["Iiraan Platform v1"]="Initial platform release with core features"
    )
    
    for title in "${!milestones[@]}"; do
        local desc="${milestones[$title]}"
        local exists
        
        if [[ "$DRY_RUN" == true ]]; then
            print_op "Check milestone: $title"
            print_op "Create milestone: $title"
            continue
        fi
        
        exists=$(gh api repos/$REPO_OWNER/$REPO_NAME/milestones --jq "[.[] | select(.title==\"$title\")] | length")
        
        if [[ "$exists" -gt 0 ]]; then
            log_info "Milestone exists: $title"
            continue
        fi
        
        log_info "Creating milestone: $title"
        gh api repos/$REPO_OWNER/$REPO_NAME/milestones \
            --method POST \
            --field title="$title" \
            --field description="$desc" \
            --field state="open" >/dev/null 2>&1 || log_warn "Failed: $title"
    done
    log_success "Milestones processed"
}

create_labels() {
    log_step "Repository Labels"
    
    declare -A labels
    labels=(
        ["research"]="0366d6"
        ["content"]="22863a"
        ["feature"]="a2eeef"
        ["enhancement"]="84b6eb"
        ["bug"]="d73a4a"
        ["documentation"]="0075ca"
        ["infrastructure"]="6a737d"
        ["needs-source"]="ffcc00"
        ["fact-check"]="ff6b6b"
        ["conflicting-sources"]="ff9f43"
        ["needs-review"]="6c5ce7"
        ["uncertain-evidence"]="fd79a8"
        ["primary-source"]="00b894"
        ["good first issue"]="7057ff"
        ["help wanted"]="008672"
        ["blocked"]="d73a4a"
    )
    
    for name in "${!labels[@]}"; do
        local color="${labels[$name]}"
        
        if [[ "$DRY_RUN" == true ]]; then
            print_op "Check label: $name"
            print_op "Create label: $name ($color)"
            continue
        fi
        
        local exists
        exists=$(gh api repos/$REPO_OWNER/$REPO_NAME/labels --jq "[.[] | select(.name==\"$name\")] | length" 2>/dev/null || echo "0")
        
        if [[ "$exists" -gt 0 ]]; then
            log_info "Label exists: $name"
            continue
        fi
        
        log_info "Creating label: $name"
        gh api repos/$REPO_OWNER/$REPO_NAME/labels \
            --method POST \
            --field name="$name" \
            --field color="$color" \
            >/dev/null 2>&1 || log_warn "Failed: $name"
    done
    log_success "Labels processed"
}

create_issues() {
    log_step "Initial Issues"
    
    # Issue definitions with metadata
    # Format: title|labels|milestone
    local issues=(
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
    
    for issue_def in "${issues[@]}"; do
        IFS='|' read -r title labels milestone <<< "$issue_def"
        
        if [[ "$DRY_RUN" == true ]]; then
            print_op "Check issue: $title"
            print_op "Create issue: $title"
            continue
        fi
        
        local exists
        exists=$(gh issue list --repo "$REPO_OWNER/$REPO_NAME" --search "$title" --json number --jq '.[0].number' 2>/dev/null || echo "")
        
        if [[ -n "$exists" ]]; then
            log_info "Issue exists: $title (#$exists)"
            continue
        fi
        
        log_info "Creating issue: $title"
        
        # Create issue with comprehensive description
        gh issue create \
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
            --milestone "$milestone" >/dev/null 2>&1 || log_warn "Failed: $title"
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
    
    local project_id
    project_id=$(find_project)
    
    if [[ -z "$project_id" ]]; then
        project_id=$(create_project)
    else
        log_info "Using existing project: $project_id"
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
    
    if [[ "$DRY_RUN" == true ]]; then
        log_warn "DRY RUN MODE - No changes were made"
    fi
}

main "$@"
