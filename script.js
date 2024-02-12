const fs = require('fs');
const readline = require('readline');

const readStream = fs.createReadStream('text.txt');
const writeStream = fs.createWriteStream('result.txt');

const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

let count = 1;

rl.on('line', (line) => {

  const words = line.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (count % 3 === 0) {
      words[i] = words[i].toUpperCase();
    }
    count++;
  }

  writeStream.write(words.join(' ') + '\n');
});

rl.on('close', () => { 
  console.log('Готово! Результати записані в файл result.txt')
  writeStream.close();
});