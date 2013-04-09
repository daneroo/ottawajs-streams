var DigitStream = require('./digit-stream');
var GreenStream = require('./green-stream');

var ds = new DigitStream({encoding:'utf8'});

ds.pipe(new GreenStream());