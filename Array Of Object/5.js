let students = [
  { name: "John", age: 20, grade: "A" },
  { name: "Alice", age: 22, grade: "B" },
  { name: "Bob", age: 21, grade: "C" },
];

for (let x = 0; x < students.length; x++) {
  if (students[x].age > 21) {
    console.log(students[x].name);
  }
}
