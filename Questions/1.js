// const numbers = [2, 3, 4];

// let data = numbers.map((element, index) => {
//   return element + index * 2;
// });
// console.log(data);

const numbers = [2, 3, 4];
function doubleAndAddIndex(numbers) {
  let data = numbers.map((element, index) => {
    return element * 2 + index;
  });
  console.log(data);
}

doubleAndAddIndex(numbers);
