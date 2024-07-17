let array = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
let data = array.forEach((el, index) => {
  if (index % 2 == 0) {
    sum += el;
  }
});
console.log(sum);
