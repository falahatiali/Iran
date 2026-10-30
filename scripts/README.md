# GitHub Project Bootstrap

Production-quality script to automate GitHub Projects v2 setup for `falahatiali/Iran`.

## Overview

This script creates and configures:
- GitHub Project v2 (`Iiraan — Historical Research & Development`)
- Status and custom fields
- Repository milestones (6)
- Repository labels (17+)
- Project views (4)
- Initial issues (10)

## Prerequisites

- GitHub CLI (`gh`) installed and authenticated
- `jq` installed
- Repository access: `falahatiali/Iran`

### Authentication

```bash
gh auth login
```

Or use a personal access token with scopes:
- `repo`
- `project`
- `read:org`
- `gist`

```bash
export GH_TOKEN="your_token_here"
gh auth login --with-token < <(echo $GH_TOKEN)
```

## Usage

### Dry run (recommended first)

```bash
./scripts/setup-github-project.sh --dry-run
```

### Execute

```bash
./scripts/setup-github-project.sh
```

The script is idempotent - safe to run multiple times.

## What it does

1. **Pre-flight checks**
   - Dependencies
   - GitHub authentication
   - Repository access

2. **Project creation**
   - Creates user-owned Project v2 if not exists
   - Links to repository
   - Sets visibility to PUBLIC

3. **Fields configuration**
   - Status field with 5 options
   - Workstream (single select)
   - Priority (single select)
   - Era (single select)
   - Effort (single select)

4. **Repository milestones**
   - Research & Editorial Framework v1
   - Shahnameh Digital Experience v1
   - Historical Investigations v1
   - Primary Sources Library v1
   - Historical Atlas v1
   - Iiraan Platform v1

5. **Repository labels**
   - Work type: research, content, feature, enhancement, bug, documentation, infrastructure
   - Research quality: needs-source, fact-check, conflicting-sources, needs-review, uncertain-evidence, primary-source
   - Contribution: good first issue, help wanted, blocked

6. **Project views**
   - Development Board (board, group by Status)
   - Historical Coverage (table, group by Era)
   - Strategic Roadmap (board, group by Milestone)
   - Research & Investigations (table, filtered)

7. **Initial issues**
   Creates 10 issues with full descriptions, acceptance criteria, labels, fields, and milestones.

## Safety

- Never deletes existing resources
- Checks existence before creation
- Dry-run mode available
- Clear error messages
- Idempotent operations

## Manual steps

Some Project v2 features require manual configuration via GitHub UI:
- Repository linking (automatic in new API, may need manual verification)
- View grouping and filtering (GraphQL schema limitations)
- Field options ordering

The script documents exact manual configuration needed.

## File structure

```
scripts/
├── setup-github-project.sh  # Main bootstrap script
└── README.md                # This file
```

## Troubleshooting

### Authentication errors

```bash
gh auth status
gh auth login
```

### Permission errors

Ensure you own the repository or have admin access.

### Project already exists

Script will detect and reuse existing project.

## Support

For issues with the script, check:
1. `gh auth status`
2. Repository permissions
3. GitHub API rate limits
