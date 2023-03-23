<!DOCTYPE html>
<html>
<head>
    <title>somaNumeros</title>
</head>
<body>

<script>
function somaNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

let data = prompt("Enter a list of numbers separated by commas:");
let arr = data.split(",").map(Number);
let result = somaNumeros(arr);
alert(result);
</script>

</body>
</html>