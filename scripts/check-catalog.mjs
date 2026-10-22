import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const catalog = JSON.parse(
  await fs.readFile(path.join(root, "catalog.json"), "utf8"),
);
const statuses = new Set(["active", "deprecated", "retired"]);
const ids = new Set();

if (catalog.catalogVersion !== 1 || !Array.isArray(catalog.contracts)) {
  throw new Error(
    "catalog.json must contain catalogVersion 1 and a contracts array",
  );
}

for (const contract of catalog.contracts) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(contract.id) || ids.has(contract.id)) {
    throw new Error(`invalid or duplicate contract id: ${contract.id}`);
  }
  ids.add(contract.id);
  const versions = new Set();
  for (const entry of contract.versions ?? []) {
    if (
      !Number.isInteger(entry.version) ||
      entry.version < 1 ||
      versions.has(entry.version)
    ) {
      throw new Error(
        `invalid or duplicate ${contract.id} version: ${entry.version}`,
      );
    }
    versions.add(entry.version);
    if (!statuses.has(entry.status))
      throw new Error(`invalid status for ${contract.id}/v${entry.version}`);
    for (const key of [
      "specification",
      "fixtures",
      ...(entry.schema ? ["schema"] : []),
    ]) {
      const relative = entry[key];
      const absolute = path.resolve(root, relative);
      if (!absolute.startsWith(`${root}${path.sep}`))
        throw new Error(`path escapes repository: ${relative}`);
      await fs.access(absolute);
    }
    const cases = JSON.parse(
      await fs.readFile(path.resolve(root, entry.fixtures), "utf8"),
    );
    if (
      cases.contract !== `${contract.id}/v${entry.version}` ||
      !Array.isArray(cases.cases)
    ) {
      throw new Error(
        `fixture identity mismatch for ${contract.id}/v${entry.version}`,
      );
    }
    const caseIds = new Set();
    for (const fixture of cases.cases) {
      if (
        typeof fixture.id !== "string" ||
        caseIds.has(fixture.id) ||
        typeof fixture.valid !== "boolean"
      ) {
        throw new Error(
          `invalid fixture case for ${contract.id}/v${entry.version}`,
        );
      }
      caseIds.add(fixture.id);
    }
  }
}

console.log(`Validated ${ids.size} contracts.`);
