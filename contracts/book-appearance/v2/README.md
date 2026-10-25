# `book-appearance/v2`

Book appearance lives in the first-level book folder note's frontmatter. The
canonical written representation is a YAML literal block scalar:

```yaml
panel: |
  icon: lucide:book-open
  accent: "#0ea5e9"
```

After YAML parsing, `panel` is a string with exactly two nonempty lines:
`icon: <value>` and `accent: <value>`, in either order. A trailing newline is
allowed. The icon must be `lucide:` followed by a lowercase kebab-case name.
The accent must be a direct six-digit hexadecimal color, with optional single
or double quotes around it. No other lines, duplicate keys, or arbitrary YAML
constructs inside the scalar are valid. Writers use the order and quoting in
the example and include a final newline.

Consumers migrating from `book-appearance/v1` may also read its legacy `panel`
mapping, but must write the v2 scalar when editing appearance metadata. Invalid
values use each consumer's documented defaults. Named colors, CSS variables,
short or alpha hex values, and unprefixed icons remain outside the contract.
