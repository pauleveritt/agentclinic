---
name: discover-standards
description: Discover and document coding standards by analyzing the codebase for patterns.
---

# discover-standards

This skill automates the discovery of coding patterns and extracts them into standards files.

## Instructions

1. **Analyze Codebase**: Use `search_files` and `read_file` to identify recurring patterns (API structures, naming conventions, directory layouts, test patterns).
2. **Propose Standards**: Present identified patterns to the user and ask which should be documented as standards.
3. **Create Standards Files**: For each confirmed pattern:
    - Determine a category (e.g., `api`, `database`, `ui`, `global`).
    - Create a markdown file in `agent-os/standards/{category}/{name}.md`.
    - Follow the Agent OS standard format for the content.
4. **Trigger Indexing**: Once standards are created, suggest running `/index-standards` to update the global index.

## Constraints
- Do not overwrite existing standards without explicit user confirmation.
- Use `agent-os/standards/` as the root for all discovered standards.