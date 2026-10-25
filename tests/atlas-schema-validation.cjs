const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const Ajv2020 = require('ajv/dist/2020').default;
const addFormats = require('ajv-formats');
const schema = JSON.parse(fs.readFileSync(path.join(__dirname, '../docs/atlas-science-record.schema.json'), 'utf8'));
const validRecord = JSON.parse(fs.readFileSync(path.join(__dirname, '../docs/examples/muonic-hydrogen.placeholder.json'), 'utf8'));
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
const validate = ajv.compile(schema);
assert.equal(validate(validRecord), true, JSON.stringify(validate.errors));
assert.equal(validRecord.status, 'unverified', 'placeholder must not be promoted');
for (const [name, mutate] of [
  ['missing status', (x) => delete x.status],
  ['unknown status', (x) => { x.status = 'confirmed'; }],
  ['unknown kind', (x) => { x.kind = 'invented'; }],
  ['extra field', (x) => { x.unreviewed = true; }],
  ['invalid source URL', (x) => { x.source.url = 'not a URI'; }],
]) {
  const bad = structuredClone(validRecord);
  mutate(bad);
  assert.equal(validate(bad), false, name + ' must fail JSON Schema validation');
}
console.log('Draft 2020-12: positive fixture passed; five negative fixtures rejected.');
