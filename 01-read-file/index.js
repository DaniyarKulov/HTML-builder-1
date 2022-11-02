const fs = require('fs');

const path = require('path');
const emitter = fs.createReadStream(`${path.dirname(__filename)}/text.txt`, 'utf-8');

emitter.on('data', (a) => console.log(a));
