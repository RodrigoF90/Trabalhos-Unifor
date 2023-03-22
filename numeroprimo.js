function numeroPrimo ();
for(i = 1; i <= n; i++){
    var cont = 0;
    for(j = 1; j <= x; j++){
        if (x % j == 0){
            cont++;
        }
    }
    if (cont > 2) {
        console.log(x+'nao e primo');
    } else {
        console.log(x+'e primo')
    }
}