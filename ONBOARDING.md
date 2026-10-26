# Add a compatible plugin

The Obsidian and Quartz implementations remain independent. A plugin can use
these contracts without installing Quartz Workspace Sync or Root Books
Workspace. Start from the appropriate read-only template in the organization's
`TEMPLATES/` workspace area; copy it to a new repository and follow that
template's own setup instructions.

1. Pick only the contract IDs and versions your plugin actually consumes.
   Read each versioned specification and its `fixtures/.../cases.json` before
   designing settings. Declare those versions in `package.json` under
   `pluginContracts` and document them in the README.
2. Define the owning frontmatter property, scope, default, and inheritance
   rule. A missing local value should inherit only if the property's contract
   says so. Keep another plugin's grammar under that plugin's ownership.
3. For settings-note discovery, read the `book-structure/v2` portable record
   when present. If absent, use the documented standalone `index.md` fallback.
   Reject unsupported contract versions and path-like names. Never read the
   coordinator's private Obsidian `data.json`.
4. In Obsidian, keep note reads and UI actions inside your plugin. In Quartz,
   adapt source filenames before content discovery when canonical index routes
   are required. Root Books Workspace ships a staging adapter for this;
   consumers can read the staged `index.md` files under v1 semantics.
5. Run the catalog's fixtures in each implementation's test suite. Add a
   small host test for both standalone fallback and portable record. Check
   that local overrides, malformed values, and canonical routes behave as
   documented. Run `npm test` here to verify catalog integrity.
6. Release each plugin on its own schedule. A contract version change calls
   for a compatibility review, not synchronized package version numbers.

The current compact example is the Exerciser pair: both hosts read the global
settings-note path from `book-structure/v2`, interpret
`exercise-preview-size-limit` through `exercise-preview-limit/v2`, and fall
back to `index.md` when the portable record is absent. The property remains
global-only in both hosts.
