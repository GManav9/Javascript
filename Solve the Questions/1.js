function checkNumber(a) {
  if (a < 0) {
    throw new Error("Negative number");
  }
  return a;
}
try {
  console.log(checkNumber(-1));
} catch (err) {
  console.log(err);
} finally {
  console.log("successfully code was run");
}
