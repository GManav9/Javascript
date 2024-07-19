const numbers = [1, 2, -3, 4, -5];

function findIndexOfFirstNegative(a) {
  for (let x = 0; x <= a.length; x++) {
    if (a[x] < 0) {
      return x;
    }
  }
  return -1;
}
console.log(findIndexOfFirstNegative(numbers));
