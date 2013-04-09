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
  this.totalDigits=1000;
}

function digit(){
  return ''+ (Math.random()*10 | 0);
}

DigitStream.prototype._read  = function(size) {
  // console.log('_read was called size=%d',size);
  if (this.totalDigits-->0){
    var r = this.push(digit());
    // console.error('push returned %j',r);
  } else {
    console.log('\n');
    this.push(null)
  }


};

new DigitStream().pipe(process.stdout)
