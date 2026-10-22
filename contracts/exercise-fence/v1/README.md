# `exercise-fence/v1`

An `exercise` Markdown fence places one exercise viewer. `exercise` is required
and names one direct child of `assets/exercises`. `layout` is `ide` or
`dropdown`, `entrypoint` is an optional safe project-relative path, and
`word-wrap` is an optional boolean that defaults to `true`.

Exercise names begin with an ASCII letter, digit, or underscore and may then
contain letters, digits, dots, underscores, and hyphens. Leading dots, absolute
paths, separators, empty path segments, and traversal are invalid.
