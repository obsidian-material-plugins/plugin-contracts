# Obsidian Material Plugin Contracts

This repository catalogs the small, versioned contracts that let independent
Obsidian and Quartz plugins exchange portable data or optional capabilities.
It contains specifications and fixtures, not shared runtime code. Plugins may
implement any subset and release on their own schedules.

## Catalog

| Contract                 | Current version | Purpose                                                     |
| ------------------------ | --------------- | ----------------------------------------------------------- |
| `book-structure`         | `v1`            | First-level book folders and their `index.md` entry points. |
| `book-appearance`        | `v1`            | Portable `panel.icon` and `panel.accent` frontmatter.       |
| `navigation-sorting`     | `v1`            | Optional runtime ordering capability for Quartz navigation. |
| `exercise-fence`         | `v1`            | Placement configuration for fenced `exercise` blocks.       |
| `exercise-manifest`      | `v1`            | `.exercise.yml` project metadata and export policy.         |
| `exercise-preview-limit` | `v1`            | Root frontmatter setting for preview-size limits.           |

`catalog.json` is the machine-readable index. Every entry points to its
specification and portable fixture corpus.

## Using a contract

Read the versioned specification and run the corresponding fixture cases
against your implementation. Declare the supported contract ID and version in
your plugin documentation or package metadata. Do not infer compatibility from
another plugin's package version.

Fork this repository to experiment with a proposal. If the result should remain
interoperable with this ecosystem, contribute it as a new version of the
existing contract or as a new contract ID. A permanently incompatible fork
should use its own namespace.

Published versions remain available even after deprecation. Consumers can
therefore upgrade deliberately instead of following a moving specification.
