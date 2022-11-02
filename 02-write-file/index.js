const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const file = path.join(__dirname, 'text.txt');

stdout.write('Привет, напишите текст: ');

stdin.on('data', (data) =>{
  fs.appendFile(file, 
    data,
    (err) => {
      if (err) console.log(err);
    }
  );
});

process.on('SIGINT', () => {
  process.exit();
});

process.on('exit', () => stdout.write('БЫБЫ'));