# Workflow: Shape Spec

Gather context and structure planning for significant work. This workflow enforces the use of Cline's native **Plan Mode**.

## Important Guidelines

- **Always use `ask_followup_question` tool** when asking the user anything
- **Offer suggestions** — Present options the user can confirm, adjust, or correct
- **Keep it lightweight** — This is shaping, not exhaustive documentation

## Prerequisites: Plan Mode Enforcement

This workflow **must be run in Plan Mode**.

**Before proceeding, check `environment_details` to see if you are currently in `PLAN MODE`.**

If NOT in plan mode, **stop immediately** and tell the user:

```
/shape-spec must be run in Plan Mode. Please enter Plan Mode first, then run /shape-spec again.
```

Do not proceed with any steps below until confirmed to be in Plan Mode.

## Process

### Step 1: Clarify What We're Building

Use `ask_followup_question` to understand the scope:

```
What are we building? Please describe the feature or change.

(Be as specific as you like — I'll ask follow-up questions if needed)
```

Based on their response, ask 1-2 clarifying questions if the scope is unclear.

### Step 2: Gather Visuals

Use `ask_followup_question`:

```
Do you have any visuals to reference?

- Mockups or wireframes
- Screenshots of similar features
- Examples from other apps

(Paste images, share file paths, or say "none")
```

### Step 3: Identify Reference Implementations

Use `ask_followup_question`:

```
Is there similar code in this codebase I should reference?

(Point me to files, folders, or features to study)
```

If references are provided, read and analyze them to inform the plan.

### Step 4: Check Product Context

Check if `agent-os/product/` or `memory-bank/productContext.md` exists.

If they exist, read them and use `ask_followup_question`:

```
I've reviewed the product context. Should this feature align with any specific product goals or constraints?

(Confirm alignment or note any adjustments)
```

### Step 5: Surface Relevant Standards

Read `agent-os/standards/index.yml` (if it exists) to identify relevant standards.

Use `ask_followup_question` to confirm:

```
Based on what we're building, these standards may apply:

[List standards]

Should I include these in the spec? (yes / adjust)
```

### Step 6: Generate Spec Folder Name

Create a folder name using this format: `YYYY-MM-DD-HHMM-{feature-slug}/` inside `specs/`.

### Step 7: Structure the Plan

Build the plan with **Task 1 always being "Save spec documentation"**.

Present this structure to the user:

```
Here's the plan structure. Task 1 saves all our shaping work before implementation begins.

---

## Task 1: Save Spec Documentation

Create `specs/{folder-name}/` with:

- **plan.md** — This full plan
- **shape.md** — Shaping notes (scope, decisions, context)
- **standards.md** — Full content of relevant standards
- **references.md** — Pointers to reference implementations

## Task 2: [First implementation task]

...

---

Does this plan structure look right? I'll finalize the implementation tasks next.
```

### Step 8: Finalize and Transition

Once the plan is finalized:

```
Plan complete. When you approve and execute:

1. Task 1 will save all spec documentation.
2. The implementation tasks will be tracked via **Focus Chain**.

**IMPORTANT: Please toggle to Act Mode to proceed with implementation.**

Ready to start? (approve / adjust)
```

## Integration with Focus Chain

When the user switching to Act Mode, Cline's native **Focus Chain** will automatically pick up the plan from the conversation and manage the todo list.