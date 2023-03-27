const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function mdc(a, b) {
    if (b===0) {
        return a;
    } else {
        return mdc (b, a% b);
    }
}
rl.question('Digite o primeiro número: ', (a) => {
    rl.question('Digite o segundo número: ', (b) => {
        console.log(`O MDC entre ${a} e ${b} é ${mdc(a, b)}`);
        rl.close();
    });
});