<!DOCTYPE html>
<html>
<head>
    <title>mdc</title>
</head>
<body>

<script>
function mdc(a,b){
    if (b===0) {
        return a;
    } else {
        return mdc (b, a% b);
    }
}

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let result = mdc(num1,num2);
alert(result);
</script>

</body>
</html>