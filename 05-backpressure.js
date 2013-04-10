var DigitStream = require('./digit-stream');
var SlowStream = require('./slow-stream');



var ds = new DigitStream({encoding:'utf8',totalDigits: 1<<8 });
var slower = new SlowStream({delay:50});

ds.pipe(slower).pipe(process.stdout);
