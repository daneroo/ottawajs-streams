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
  // this.totalDigits=10000000;
  this.totalDigits=30000000;
  this.totalPushed=0;
  this.totalRead=0;
}

function digit(){
  return ''+ (Math.random()*10 | 0);
}

function readStart(rs) {
  // console.error('readStart');
  var count=0;
  while (true){
    count++;
    rs.totalPushed++;
    var r = rs.push(digit());
    // console.error('push returned:',r);
    if(!r) {
      if (count>1 || (rs.totalPushed %100000)==0){
        console.error('_push\'d %d digits, tot: %d',count,rs.totalPushed);        
      }
      return;
    }
  }
}

DigitStream.prototype._read  = function(size) {
  // console.error('_read was called size=%d',size);
  if (this.totalDigits-- > 0){
    readStart(this);
    // var r = this.push(digit());
    // console.error('push returned %j',r);
  } else {
    // console.log('\n');
    this.push(null)
  }


};

// new DigitStream().pipe(process.stdout)
var ds = new DigitStream({encoding:'utf8'});
ds.on('readable', function() {
  console.error('readable(%d,%d):',ds.totalRead,ds.totalPushed);
  ds.read(0);
  console.error('readable(%d,%d):',ds.totalRead,ds.totalPushed);
});
ds.pipe(process.stdout)
if(0)while (true){
  // var b = ds.read(4096);
  var b = ds.read();
  if(b && b.length){
    ds.totalRead+=b.length;
    console.error('read(%d):',ds.totalRead);
    console.log(b);
  }
  if(b===null){
    console.log('done reading:',b);
    break;
  }
}
