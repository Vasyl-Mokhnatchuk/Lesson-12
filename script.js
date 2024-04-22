const fs = require('fs');
const { Transform } = require('stream');

class UpperCaseEveryThirdWord extends Transform {
  constructor(options) {
    super(options);
    this.wordCount = 0;
  }

  _transform(chunk, encoding, callback) {
    const words = chunk.toString().split(' ');
    const modifiedWords = words.map((word, index) => {
      this.wordCount++;
      return (this.wordCount % 3 === 0) ? word.toUpperCase() : word;
    });
    callback(null, modifiedWords.join(' '));
  }
}

const inputFile = 'input.txt';
const outputFile = 'output.txt';
const inputStream = fs.createReadStream(inputFile);
const upperCaseStream = new UpperCaseEveryThirdWord();
const outputStream = fs.createWriteStream(outputFile);

inputStream.pipe(upperCaseStream).pipe(outputStream);

outputStream.on('finish', () => {
    console.log('Успішно виконано! Результат записано в output.txt');
  });
outputStream.on('error', (err) => {
    console.error('Помилка:', err.message);
  });
