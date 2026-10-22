# `book-appearance/v1`

Book appearance is stored on the first-level book's `index.md` frontmatter:

```yaml
panel:
  icon: "lucide:book-open"
  accent: "#0ea5e9"
```

`panel.icon` is `lucide:` followed by a lowercase kebab-case icon identifier.
`panel.accent` is a direct six-digit hexadecimal color. Consumers must ignore
invalid values and use their own documented defaults. Named colors, CSS
variables, short or alpha hex values, unprefixed icons, and implementation-owned
registries are outside version 1.
