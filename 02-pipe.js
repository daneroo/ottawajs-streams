var DigitStream = require('./digit-stream');

var ds = new DigitStream({encoding:'utf8',totalDigits: 1<<16 }); // 64k

// 1a- pipe to stdout
ds.pipe(process.stdout)

