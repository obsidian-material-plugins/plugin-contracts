import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

async function json(relative) {
  return JSON.parse(await readFile(new URL(`../${relative}`, import.meta.url), "utf8"));
}

const structure = await json("contracts/book-structure/v2/schema.json");
const structureCases = await json("fixtures/book-structure/v2/cases.json");
const noteName = new RegExp(structure.$defs.noteName.pattern);
const localTokenLimit = new RegExp(
  structure.properties.localNotePattern.allOf[1].pattern,
);
for (const fixture of structureCases.cases) {
  const record = fixture.input;
  const valid =
    record.contract === "book-structure/v2" &&
    noteName.test(record.globalNote) &&
    noteName.test(record.localNotePattern) &&
    localTokenLimit.test(record.localNotePattern);
  assert.equal(valid, fixture.valid, fixture.id);
}

const preview = await json("contracts/exercise-preview-limit/v2/schema.json");
const previewCases = await json("fixtures/exercise-preview-limit/v2/cases.json");
const unitValue = new RegExp(
  preview.properties["exercise-preview-size-limit"].oneOf[1].pattern,
);
for (const fixture of previewCases.cases) {
  const value = fixture.input;
  const valid =
    typeof value === "number"
      ? Number.isFinite(value) && value > 0
      : typeof value === "string" && unitValue.test(value);
  assert.equal(valid, fixture.valid, fixture.id);
}

console.log("Validated v2 filename and preview-limit fixtures against schema patterns.");
