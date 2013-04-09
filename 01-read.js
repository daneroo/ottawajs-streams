var DigitStream = require('./digit-stream');
var colors = require('colors');

var ds = new DigitStream({encoding:'utf8',totalDigits: 1<<18 });

var totalRead=0;
while (true){
  var b = ds.read(8);
  if(b && b.length){
    totalRead+=b.length;
    console.log('read %s len:%d, total:%d',b.red,b.length,totalRead);
  } else {
  // if(b===null){
    console.error('done reading total:',totalRead);
    break;
  }
}
