const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const file = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Привет, напишите текст: ');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    endFunc();
  }
  file.write(data);
});


process.on('SIGINT', () => {
  process.exit();
});

const endFunc = () => {
  process.exit();
}
process.on('exit', () => stdout.write('БЫБЫ'));