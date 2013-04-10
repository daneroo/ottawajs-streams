var DigitStream = require('./digit-stream');
var SlowStream = require('./slow-stream');


var chiller = new SlowStream({delay:50});

var ds = new DigitStream({encoding:'utf8',totalDigits: 1<<8 });
// var ds = process.stdin;

ds.pipe(chiller);

chiller.pipe(process.stdout);