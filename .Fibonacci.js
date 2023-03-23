<!DOCTYPE html>
<html>
  <head>
    <title>Fibonacci</title>
  </head>
  <body>
    <p id="fibSeries"></p>

    <script>
      var n = parseInt(prompt("Enter the number of terms: "));
      var fib = [];

      fib[0] = 0;
      fib[1] = 1;

      for (i=2; i<n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
      }

      var serieFib = '';

      for (i=0; i<n-1; i++) {
        serieFib += fib[i] + ' ';
      }

      serieFib += fib[n-1];
      
      document.getElementById("fibSeries").innerHTML = serieFib;
    </script>
  </body>
</html>