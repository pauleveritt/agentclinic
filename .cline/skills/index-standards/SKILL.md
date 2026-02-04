---
name: index-standards
description: Rebuild the standards index (index.yml) from the standards directory.
---

# index-standards

Maintains a searchable index of all documented standards to enable intelligent injection.

## Instructions

1. **Scan Standards**: Recursively list all `.md` files in `agent-os/standards/`.
2. **Extract Metadata**: For each standard file, read the first few lines to extract a title and a brief description (or generate one based on content).
3. **Update Index**: Write or update `agent-os/standards/index.yml` with the following format:
   ```yaml
   standards:
     - path: category/name.md
       title: "Human Readable Title"
       description: "Short summary of what this standard covers"
   ```
4. **Verify Integrity**: Ensure all paths in the index are valid and descriptions are concise.