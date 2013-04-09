var DigitStream = require('./digit-stream');

var ds = new DigitStream({encoding:'utf8'});
ds.pipe(process.stdout)
