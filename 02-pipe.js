var DigitStream = require('./digit-stream');

var digits = new DigitStream({encoding:'utf8',totalDigits: 1<<16 }); // 64k

digits.pipe(process.stdout)

