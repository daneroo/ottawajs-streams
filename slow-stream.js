var Transform = require('stream').Transform;
// for 0.8 compatibility
if (!Transform) {
  Transform = require('readable-stream/transform');
}

SlowStream.prototype = Object.create(Transform.prototype, {
  constructor: { value: SlowStream }
});

function SlowStream(options) {
  Transform.call(this, options);
  this.delay = 1000;
  if (options && options.delay) this.delay=options.delay;
}

function slowType(chunk,ss,callback){
  ss.push(chunk.slice(0,1))
  if (chunk.length>1){
    setTimeout(function(){
      slowType(chunk.slice(1),ss,callback);
    },ss.delay);
  } else {
    if(callback) setTimeout(callback,ss.delay);
  }
}

SlowStream.prototype._transform = function(chunk, encoding, callback) {
  slowType(chunk,this,callback);
};

exports = module.exports = SlowStream;

