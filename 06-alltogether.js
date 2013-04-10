var DigitStream = require('./digit-stream-fast');
var PrimeStream = require('./prime-stream');
var SlowStream = require('./slow-stream');


var chiller = new SlowStream({delay:10});
var primer = new PrimeStream({atATime:6});

var ds = new DigitStream({encoding:'utf8',totalDigits: 1<<18 });

ds.pipe(primer);

if (true){
	primer.pipe(process.stdout);
} else {
	primer.pipe(chiller);
	chiller.pipe(process.stdout);
}
