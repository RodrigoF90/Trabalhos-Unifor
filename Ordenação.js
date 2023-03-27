const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function quickSort(itens, left = 0, right = itens.length - 1) {
    let index;
    if (itens.length > 1) {
        index = partition(itens, left, right);
        if (left < index - 1) {
            quickSort(itens, left, index - 1);
        }
        if (index < right) {
            quickSort(itens, index, right);
        }
    }
    return itens;
};
function partition(itens, left, right) {
    let pivot = itens[Math.floor((right + left) / 2)], i = left,
        j = right;
    while (i <= j) {
        while (itens[i] < pivot) {
            i++;
        };
        while (itens[j] > pivot) {
            j--;
        };
        if (i <= j) {
            [itens[i], itens[j]] = [itens[j], itens[i]];
            i++;
            j--;
        };
    };
    return i;
};
rl.question('Digite os numeros separado por virgulas: ', (data) => {
    let arr = data.split(",").map(Number);
    let result = quickSort(arr);
    console.log(result);
    rl.close();
});