function countIntegers(data, N) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
      if (data[i] >= data[0] && data[i] <= N) {
          count++;
      }
  }
  return count;
}
let data = [1, 2, 3, 5, 7, 9, 12, 15, 26];
let N = 8;
let result = countIntegers(data, N);
console.log(result);