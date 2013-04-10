var colors = require('colors');
var prime = require('./prime');
var Transform = require('stream').Transform;
// for 0.8 compatibility
if (!Transform) {
  Transform = require('readable-stream/transform');
}

PrimeStream.prototype = Object.create(Transform.prototype, {
  constructor: { value: PrimeStream }
});

function PrimeStream(options) {
  Transform.call(this, options);
}

function tint(numAsString){
  var n = parseInt(numAsString, 10);
  return prime.isPrime(n) ? numAsString.red : numAsString.grey;
}

var atATime=12;
PrimeStream.prototype._transform = function(chunk, encoding, callback) {
  for (var i = 0; i < chunk.length; i+=atATime) {
    var str = tint(chunk.toString(encoding,i,i+atATime));
    this.push(str+' - ');
  };
  callback();
};

exports = module.exports = PrimeStream;

