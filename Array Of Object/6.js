let cars = [
  { brand: "Toyota", model: "Corolla", year: 2022 },
  { brand: "Honda", model: "Civic", year: 2021 },
  { brand: "Ford", model: "Fusion", year: 2020 },
];

for (let x = 0; x < cars.length; x++) {
  if (cars[x].year > 2020) {
    console.log(cars[x].brand);
  }
}
