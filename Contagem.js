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

rl.question('insira o valor de N: ', (N) => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = countIntegers(data, N);
  console.log(result);
  rl.close();

});