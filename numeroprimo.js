const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function numeroPrimo(n) {
    let cont = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            cont++;
        }
    }
    if (cont > 2) {
        console.log(n + ' nao e primo');
    } else {
        console.log(n + ' e primo')
    }
}
rl.question('Digite um número: ', (n) => {
    numeroPrimo(n);
    rl.close();
});