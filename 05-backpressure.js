var DigitStream = require('./digit-stream');
var SlowStream = require('./slow-stream');

var digits = new DigitStream({encoding:'utf8',totalDigits: 1<<8 });
var slower = new SlowStream({delay:50});

digits.pipe(slower).pipe(process.stdout);
