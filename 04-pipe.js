var DigitStream = require('./digit-stream');
var GreenStream = require('./green-stream');

var digits = new DigitStream({encoding:'utf8', totalDigits: 1<<17});
var greener = new GreenStream(); 

digits.pipe(greener);
