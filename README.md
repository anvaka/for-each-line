# for-each-line

Read a text file line by line, calls a callback, returns a promise that is resolved when file is completed

# usage

``` js
let forEachLine = require('for-each-line');

forEachLine(fileName, (line) => {
  console.log(line);
}).then(() => {
  console.log('Done!')
});
```

## why?

I've been copy-pasting this code over and over, and I got tired of it it.
So created this module. It's only 26 lines.


# license

MIT
