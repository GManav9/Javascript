const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

let data = numbers.map((element) => {
  if (element % 2 != 0) {
    return element * 2;
  } else {
    return element;
  }
});
console.log(data);
