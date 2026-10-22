# `exercise-preview-limit/v1`

The root `index.md` frontmatter may define `exercise-preview-size-limit` as a
positive byte count or a positive decimal number followed by `KB`, `MB`, or
`GB` (case-insensitive). Units use powers of 1024. Consumers floor the resolved
byte count. Missing, non-positive, non-finite, malformed, and unsupported values
use the consumer's documented fallback; Exerciser defaults to 50 MiB.
