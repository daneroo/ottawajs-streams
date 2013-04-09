var Writable = require('stream').Writable;
// for 0.8 compatibility
if (!Writable) {
  Writable = require('readable-stream/writable');
}

GreenStream.prototype = Object.create(Writable.prototype, {
  constructor: { value: GreenStream }
});

function GreenStream(options) {
  Writable.call(this, options);
}

GreenStream.prototype._write = function(chunk, encoding, callback) {
  process.stdout.write('\u001b[32m' + chunk + '\u001b[39m');
  callback();
};

process.stdin.pipe(new GreenStream());
