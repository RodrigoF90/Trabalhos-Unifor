const { stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countIntegers(data, N) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
      if (data[i] >= data[0] && data[i] <= N) {
          count++;
     }
  }
  return count;
}

rl.question('Digite o número de elementos do vetor: ', (N) => {
  rl.question('Digite os elementos do vetor: ', (data) => {
    data = data.split(' ').map(Number);
    console.log(countIntegers(data, N));
    rl.close();
  });
});