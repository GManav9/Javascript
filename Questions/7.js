const numbers = [1, 2, 3, 4, 5];

function transformArray(numbers) {
  let data = numbers.map((element, index) => {
    if (element % 2 == 0) {
      return element * element;
    } else {
      return element * element * element;
    }
  });

  return data;
}
console.log(transformArray(numbers));
