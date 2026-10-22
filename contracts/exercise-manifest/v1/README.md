# `exercise-manifest/v1`

Each exercise project may contain `.exercise.yml` with declared `version: 1`.
The manifest owns preview hiding, Quartz/export exclusion, preview-size bypass,
expected-output examples, highlighted line ranges, and annotations. Unsupported
declared versions must be rejected rather than interpreted as version 1.

All paths and glob patterns are project-relative. Absolute paths, drive paths,
empty segments, traversal, and negated patterns are invalid. The manifest is
authoring metadata and is never previewed, published as a content asset, or
included in an exported project.

`hide-from-preview` does not remove a file from copies or archives.
`exclude-from-quartz` removes it from Quartz publication and exports.
Annotations are injected into exports only when `inject-into-export` is true.
