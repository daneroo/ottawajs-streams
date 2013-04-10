var DigitStream = require('./digit-stream-fast');
var PrimeStream = require('./prime-stream');
var SlowStream = require('./slow-stream');

var digits = new DigitStream({encoding:'utf8',totalDigits: 1<<18 });
var primer = new PrimeStream({atATime:6});
var slower = new SlowStream({delay:10});

// digits.pipe(primer).pipe(process.stdout);

digits.pipe(primer).pipe(slower).pipe(process.stdout);
