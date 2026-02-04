# Agent OS 3.0 Cline Rules

These rules integrate the Agent OS 3.0 system into Cline's Spec-Driven Development (SDD) workflow.

## Spec-Driven Development (SDD)
1. **Always use Plan Mode for planning**: Run `/shape-spec` or `/plan-product` only when in **PLAN MODE**.
2. **Accept Plans before Implementation**: Once a plan is finalized in Plan Mode, the user must toggle to **ACT MODE** to begin implementation.
3. **Focus Chain Integration**: Cline's native Focus Chain will automatically manage the task list generated during the shaping phase.

## Standards Management
1. **Modular Standards**: All coding conventions are stored as indexed markdown files in `agent-os/standards/`.
2. **Dynamic Injection**: Use the `inject-standards` skill to bring relevant standards into context.
3. **Reference-First**: Prefer file references (`@agent-os/standards/...`) over copying content to keep context lightweight.

## Documentation
1. **Memory Bank**: Maintain `memory-bank/` as the single source of truth for project status and context.
2. **Specs**: All feature specifications are stored in `specs/YYYY-MM-DD-feature-slug/`.
3. **Agents Bridge**: Refer to `AGENTS.md` for cross-agent compatibility details.