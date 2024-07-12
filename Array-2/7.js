let scores = [50, 75, 85, 90, 85];
let sum = 0;
let avg;
for (let x = 0; x < scores.length; x++) {
  sum += scores[x];
  avg = sum / scores.length;
}
console.log(sum);

console.log(avg);
