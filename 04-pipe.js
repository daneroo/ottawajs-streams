var DigitStream = require('./digit-stream');
var GreenStream = require('./green-stream');

var ds = new DigitStream({encoding:'utf8'});
var gs = new GreenStream(); 

ds.pipe(gs);
