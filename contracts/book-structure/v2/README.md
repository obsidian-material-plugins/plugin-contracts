# `book-structure/v2`

The vault root contains `.obsidian-to-quartz-workspace.json`. This portable
record identifies the authored global settings note and the filename pattern
for optional local settings notes:

```json
{
  "contract": "book-structure/v2",
  "globalNote": "overview.md",
  "localNotePattern": "{{folder_name}}.md"
}
```

`globalNote` is one Markdown basename at the vault root. It is resolved when
the user applies a naming choice; it does not change because a checkout or
vault directory is renamed. `localNotePattern` is one Markdown basename inside
each folder. It may contain one `{{folder_name}}` token, replaced with that
folder's literal name. A matching note may occur at any folder depth. Missing
local notes are normal and are never created just because this record exists.
Both fields reject separators, traversal, Windows-reserved filename characters,
trailing spaces or dots, and non-Markdown extensions.

The root note supplies global settings. For a supported property, the closest
local note with an explicit value wins for its folder subtree; the global
value is the fallback. Each property's contract defines its valid scopes,
whether a structured value merges or replaces, and how invalid or empty values
behave. This contract does not assign those semantics to every frontmatter key.

Quartz adapters copy publishable content to a separate build input before
Quartz's Markdown scan. In that copy they present the global note as
`index.md` and each existing matching local note as that folder's `index.md`.
The authored vault is never renamed by a build. Public root and folder routes
remain canonical `index` routes. Before copying, an adapter must list every
destination already occupied by a different file and abort without changing
source content or producing partial staged output. It must resolve links to
renamed notes, preserve aliases and fragments, and leave prose and code alone.
Ambiguous references must be reported instead of silently redirected.

Consumers that do not implement v2 may continue using physical `index.md`
files under v1. A v2 producer may also emit a v1-shaped staged build input.
If the portable record is absent, a reader may use `index.md` for both names
as a standalone fallback, but it must not claim that a custom convention was
discovered.
