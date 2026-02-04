---
name: inject-standards
description: Inject relevant coding standards into the current context based on the task.
---

# inject-standards

Deploy relevant standards into the AI's context using either direct content injection or file references.

## Instructions

1. **Analyze Context**: Determine the current task scenario (Conversation, Skill Creation, or Planning).
2. **Read Index**: Consult `agent-os/standards/index.yml` for available standards.
3. **Match & Suggest**: Present 2-5 relevant standards to the user based on their current work.
4. **Inject Standards**:
    - **Conversation Mode**: Use `read_file` to fetch the full content and output it into the chat.
    - **Reference Mode**: Output `@` file references (e.g., `@agent-os/standards/api/response-format.md`). This is preferred for building Skills or Specs to keep context lightweight.
5. **Verify Resolution**: Ensure Cline can resolve any injected file paths.

## Usage
- `/inject-standards` (Auto-suggest)
- `/inject-standards {path}` (Explicit injection)