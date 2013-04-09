var GreenStream = require('./green-stream');

process.stdin.pipe(new GreenStream());
