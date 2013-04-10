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

function digits(size){
  var z = 48; //'0'.charCodeAt(0)
  var buf = new Buffer(size);
  for (var i=0;i<size;i++){
    buf[i]= z + (Math.random()*10 | 0)
  }
  return buf;
}

DigitStream.prototype._read  = function(size) {

  size = Math.min(size,this.totalDigits)
  this.push(digits(size));
  this.totalDigits -= size;
  
  if (0===this.totalDigits) {
    this.push(null);
  }
};


exports = module.exports = DigitStream;
