<!DOCTYPE html>
<html>
<head>
    <title>numeroPrimo</title>
</head>
<body>

<script>
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

let num = prompt("Enter a number:");
numeroPrimo(num);
</script>

</body>
</html>