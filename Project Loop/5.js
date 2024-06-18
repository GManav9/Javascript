let number = 1;
for (let row = 1; row <= 4; row++) {
  let a = "";
  for (col = 1; col <= row; col++) {
    a += number;
    number++;
  }
  console.log(a);
}
