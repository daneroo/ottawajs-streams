var Readable = require('stream').Readble;
// for 0.8 compatibility
if (!Readable) {
  Readable = require('readable-stream/readable');
}

DigitStream.prototype = Object.create(Readable.prototype, {
  constructor: { value: DigitStream }
});

function DigitStream(options) {
  Readable.call(this, options);
  this.totalDigits=options.totalDigits||(1<<20); // 1MB
}

function digit(){
  return ''+ (Math.random()*10 | 0);
}

DigitStream.prototype._read  = function(size) {
  var pushMore=true;
  while (pushMore && this.totalDigits-- > 0){
    pushMore = this.push(digit());
  } 
  if (0===this.totalDigits) {
    this.push(null);
  }
};


exports = module.exports = DigitStream;
