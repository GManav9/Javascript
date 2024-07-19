const numbers = [1, 2, 3];

function logSquares(numbers) {
  let data = numbers.forEach((element) => {
    console.log(element * element);
  });
}

logSquares(numbers);
