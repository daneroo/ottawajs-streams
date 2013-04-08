var PassThrough = require('stream').PassThrough;

if (!PassThrough) {
  PassThrough = require('readable-stream/passthrough');
}