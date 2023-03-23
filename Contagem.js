<!DOCTYPE html>
<html>
  <head>
    <title>Contagem</title>
  </head>
  <body>
    <h1>Result:</h1>
    <p id="result"></p>

    <script>
      let array = [1, 3, 2, 4];
      let N = 4;
      let count = 0;
      
      for (let i = 0; i < array.length; i++) {
        if (array[i] >= array[0] && array[i] <= N) {
          count++;
        }
      }

      document.getElementById("result").innerHTML = count;
    </script>
  </body>
</html>