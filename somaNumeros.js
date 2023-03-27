const { stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function somaNumeros (numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}; 
rl.question('Digite os numeros separado por virgulas: ', (data) => {
    let arr = data.split(",").map(Number);
    let result = somaNumeros(arr);
    console.log(result);
    rl.close();
});