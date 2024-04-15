const fs = require('fs');

const inputFile = 'input.txt';
const outputFile = 'output.txt';

fs.readFile(inputFile, 'utf-8', (err, data) => {
  if (err) throw err;

  const processedData = data.split('\n').map(line => {
    const words = line.split(' ');
    for (let i = 2; i < words.length; i += 3) {
      words[i] = words[i].toUpperCase();
    }
    return words.join(' ');
  }).join('\n');

  fs.writeFile(outputFile, processedData, (err) => {
    if (err) throw err;
    console.log('Файл успішно оброблено!');
  });
});
