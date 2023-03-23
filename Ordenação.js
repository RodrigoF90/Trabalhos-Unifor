<!DOCTYPE html>
<html>
<head>
    <title>ordenacao</title>
</head>
<body>

<script>
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
}

function partition(itens, left, right) {
    let pivot = itens[Math.floor((right + left) / 2)], i = left,
        j = right;
    while (i <= j) {
        while (itens[i] < pivot) {
            i++;
        }
        while (itens[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [itens[i], itens[j]] = [itens[j], itens[i]];
            i++;
            j--;
        }
    }
    return i;
}

let data = prompt("Enter a list of numbers separated by commas:");
let arr = data.split(",").map(Number);
let result = quickSort(arr);
alert(result);
</script>

</body>
</html>