# Plugin contracts repository

## Purpose

This repository is the canonical, runtime-independent catalog of contracts
shared by plugins in the `obsidian-material-plugins` organization. It contains
specifications, schemas where useful, and portable fixtures. It must not become
a shared runtime library or a coordinated package-release mechanism.

## Versioning

- Contract IDs and version directories are immutable once published.
- Add a new `vN` directory for a breaking semantic change.
- Additive clarifications may update an unpublished version; after publication,
  prefer a new version whenever a consumer could interpret the change
  differently.
- Never delete a published version. Mark it `deprecated` or `retired` in
  `catalog.json` and point to its replacement.
- Package versions describe delivery of the catalog. They do not replace the
  independent versions of the contracts inside it.

## Boundaries

- Keep fixtures host-neutral and free of machine paths, private vault content,
  credentials, and implementation-specific runtime objects.
- Reference upstream-owned grammars instead of copying or renaming them as an
  organization contract.
- A plugin may implement only the contracts it needs and release independently.
- Forks are welcome for proposals and experiments. A permanent incompatible
  fork must use a distinct contract namespace and must not claim compatibility
  with the original contract.
- Run `npm test` before publishing changes.
