# Quick Start Guide

## Prerequisites Checklist

- [ ] GitHub CLI installed: `gh --version`
- [ ] jq installed: `jq --version`
- [ ] Authenticated: `gh auth status`
- [ ] Repository access: `gh repo view falahatiali/Iran`

## Authentication Setup

If not authenticated:

```bash
gh auth login
```

Or with token:

```bash
export GH_TOKEN="ghp_xxxxxxxxxxxx"
gh auth login --with-token < <(echo $GH_TOKEN)
```

## Run Script

### 1. Dry run (always first)

```bash
cd /Users/afm/projects/node/Iran
./scripts/setup-github-project.sh --dry-run
```

This shows what would be created without making changes.

### 2. Actual execution

```bash
./scripts/setup-github-project.sh
```

The script is idempotent - safe to run multiple times.

## What Gets Created

### GitHub Project
- Title: Iiraan — Historical Research & Development
- Owner: falahatiali
- Visibility: PUBLIC
- Description: Roadmap for Iranian history project

### Repository Milestones (6)
1. Research & Editorial Framework v1
2. Shahnameh Digital Experience v1
3. Historical Investigations v1
4. Primary Sources Library v1
5. Historical Atlas v1
6. Iiraan Platform v1

### Repository Labels (17)
- Work type: research, content, feature, enhancement, bug, documentation, infrastructure
- Research quality: needs-source, fact-check, conflicting-sources, needs-review, uncertain-evidence, primary-source
- Contribution: good first issue, help wanted, blocked

### Issues (10)
All with detailed context, objectives, scope, acceptance criteria, and research requirements.

## Manual Steps Required

After script runs, manually configure:

### Project Fields
1. Go to Project → Fields
2. Add Status (single select): Backlog, Ready, In Progress, In Review, Done
3. Add Workstream (single select): 7 options
4. Add Priority (single select): 4 options
5. Add Era (single select): 14 options
6. Add Effort (single select): 4 options

### Project Views
1. Development Board: Board layout, Group by Status
2. Historical Coverage: Table layout, Group by Era
3. Strategic Roadmap: Board layout, Group by Milestone
4. Research & Investigations: Table layout, Filter by Workstream

### Link Project
Connect project to falahatiali/Iran repository in project settings.

## Safety Features

- Checks existence before creation
- Never deletes existing data
- Dry-run mode
- Clear error messages
- Idempotent operations

## Troubleshooting

### "Not authenticated"
```bash
gh auth login
```

### "Cannot access repository"
Check repository exists and you have access.

### "Failed to create"
Check GitHub API rate limits and permissions.

### Issues not created
Check milestone names match exactly.

## Next Steps

1. Run dry-run
2. Configure GitHub authentication
3. Execute script
4. Manually configure fields and views
5. Start working on issues
