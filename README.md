# AgentClinic - PetClinic for AI Coding Agents

Coding agents are doing a lot of work. It's stressful! Hallucinations, context rot, memory issues, coworker subagent
coordination.

Let's build a clinic where they can get help with their issues.

- Modeled after PetClinic
- Three-tier web application using TypeScript

## Brainstorming

We agreed that it should be a professional-like server-side web app
Server-side web project, not a gameTypeScript most likelyHave familiar, workplace-realistic structure: database layer,
API / service layer, Web UI Purpose: mirrors what professionals actually see at work. But to be implemented with SDD. We
assume that the familiar structure will not distract from the new approach

The well known example is Pet Clinic. But we wanted to add some humour and came up with the idea of “Agent Clinic”/ Pet
Clinic for Agents”

Agents have:
“Conditions” (latency, hallucinations, burnout, bad prompts )“Treatments” (fine-tuning, better specs, guardrails,
retries)Terminology is playful, but structure is real

Purpose: engagement without turning it into a game.

## More brainstorming 1

Definitely a nice frontend, gives a chance to submit wireframes as part of the spec

Likely React, though confession, I’m in the less-React crowd

Likely a simple SQLite database, managed with a TypeScript ORM

Absolutely with testing, I’m a Vitest fanboy. In fact, yesterday we discussed this as part of the course…should the
human write the tests as part of the spec? We might have a mini-lesson aimed at, shall we say, the Puritans

Very good point about MCP and Context7 (etc.). Though Anthropic is pumping out the “MCP is dead, use skills” message a
bit.

Good thoughts on the extra ideas e.g. dashboard and monitoring. Those are good use cases for lessons as they aren’t too
domain-intensive, everybody already knows those

## More brainstorming 2

I like the TypeScript idea, I think we can even point to its meteoric rise from the JetBrains survey (in screenshot). I
actually think pulling in some AI-related datapoints from the survey could be really motivating as well.

For tech stack,
what do you guys think about using bun? It's a simple drop-in and might signal being with-the-times. I saw that Elysia
is popular with bun, but I haven't used it.

React seems the right choice, given its market share.

Vitest sounds cool!!
Never used it personally but heard a lot about it.

Re: tests, I definitely like your idea of having them defined early
on as part of the spec

Re: who writes the tests, I was reading a recent tweet from Karpathy saying his workflow is "80%
agent coding and 20% edits and touchups ... I am mostly programming in English now". This seems to be where coding is
headed ... one idea for the course is to roughly map onto that ratio.

Re: skills & MCP, my understanding is that they are
complementary, rather than that skills replace MCP. I can have a skill to analyze my data, but I still need the MCP
server to access it from BigQuery or whatnot. So I think we can definitely use both.