# `book-structure/v1`

A book workspace has one root entry point named `index.md`. Each book is one
first-level directory containing its own `index.md` entry point. The directory
segment is the stable book identifier; the folder-note `title`, when present,
is its human-readable name.

Nested directories are content inside a book and do not create additional
books. Files outside first-level book directories are root content. Consumers
may apply their own visibility and presentation policies, but must not treat
those policies as additions to this structural contract.

Paths are slash-separated and relative to the content or vault root. Empty,
absolute, traversing, dot-segment, backslash, doubled-separator, leading-slash,
and trailing-slash book identifiers are invalid.
