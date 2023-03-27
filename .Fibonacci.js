const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 20; i++) {
  console.log(fibonacci(i));
}
rl.question('Digite um número: ', (n) => {
  console.log(fibonacci(n));
  rl.close();
});
