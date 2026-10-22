# `navigation-sorting/v1`

This optional Quartz build-time capability lets one plugin ask another to order
or hide navigation entries without a package dependency.

The provider registers a frozen service at:

```text
Symbol.for("obsidian-material-plugins/navigation-sorting/v1")
```

The service has `apiVersion: 1` and a `sort(folderPath, items, allFiles)` method.
Each item contains an opaque `value`, canonical `path`, and `isFolder` flag. The
result contains `matched` and an `items` array of the original opaque values.

Consumers resolve the service at use time, validate its API version and result,
and preserve standalone ordering when it is absent, unmatched, invalid, or
throws. A matched result may omit values to hide them, but may not duplicate or
invent values. `allFiles` is the current Quartz processed-file collection; a
future version should replace that host-shaped input with a normalized model.
