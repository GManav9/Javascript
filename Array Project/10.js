let Fruits = ["apple", "banana", "pear"];

let data = Fruits.filter((element) => {
  if (element.length > 3) {
    return element;
  }
});
console.log(data);
