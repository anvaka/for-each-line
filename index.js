var readline = require('readline');
var fs = require('fs');

module.exports = forEachLine;

/**
 * Read `inputFileName`, call `callback` for each line
 * 
 * @param {String} inputFileName - name of the file to read.
 * @param {Function(line)} callback - a function that is called for each line.
 * of the input file
 * 
 * @returns Promise that is resolved when file reading is completed.
 */
function forEachLine(inputFileName, callback) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(inputFileName)
    });

    rl.on('line', callback)
    rl.on('close', resolve)
    rl.on('error', reject);
  });
}
