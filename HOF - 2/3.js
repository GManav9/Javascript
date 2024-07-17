const numbers = [5, 10, 15, 20, 25, 30, 35, 40];

let data = numbers.filter((element) => {
  return element % 2 == 0;
});
console.log(data);
