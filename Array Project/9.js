let numbers = [1, 2, 3, 4, 5];

let data = numbers.filter((element) => {
  if (element % 2 == 0) {
    return element;
  }
});

console.log(data);
