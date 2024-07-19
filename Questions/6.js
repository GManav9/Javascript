const sentence = "hello world";
let str = " ";
function capitalizeWords() {
  for (let x = 0; x < sentence.length; x++) {
    if (x == 0 || sentence[x - 1] == " ") {
      str += sentence[x].toUpperCase();
    } else {
      str += sentence[x];
    }
  }
  return str;
}
console.log(capitalizeWords(sentence));
