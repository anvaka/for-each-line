const test = require('tap').test;
const fs = require('fs');
const forEachLine = require('../');

test('it can print itself', (t) => {
  let inputFileName = module.filename;

  let expectedContent = fs.readFileSync(inputFileName, 'utf8')

  let accumulator = [];
  forEachLine(inputFileName, line => accumulator.push(line)).then(() => {
    t.equal(accumulator.join('\n') + '\n', expectedContent, "File content is the same");
    t.end();
  });
});
