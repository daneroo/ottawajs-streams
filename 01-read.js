var DigitStream = require('./digit-stream');

// new DigitStream().pipe(process.stdout)
var ds = new DigitStream({encoding:'utf8'});

ds.on('readable', function() {
  console.error('readable(%d,%d):',ds.totalRead,ds.totalPushed);
  ds.read(0);
  console.error('readable(%d,%d):',ds.totalRead,ds.totalPushed);
});

while (true){
  var b = ds.read(4096);
  // var b = ds.read();
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
