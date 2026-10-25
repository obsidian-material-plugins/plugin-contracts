# `exercise-preview-limit/v2`

The global settings note selected by `book-structure/v2` may define
`exercise-preview-size-limit`. When the portable convention record is absent,
standalone readers use root `index.md`. This property is global-only: local
settings notes never override it.

The value is a positive byte count or a positive decimal number followed by
`KB`, `MB`, or `GB` (case-insensitive). Units use powers of 1024. Consumers
floor the resolved byte count. Missing, non-positive, non-finite, malformed,
and unsupported values use the consumer's documented fallback; Exerciser
defaults to 50 MiB. A manifest-level per-exercise bypass remains separate.
