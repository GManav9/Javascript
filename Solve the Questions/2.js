function checkValue(value) {
  if (value < 0) {
    throw new Error("value is less than zero");
  } else if (value >= "a" && value <= "z") {
    throw new Error("value is character");
  }

  return value;
}

try {
  console.log(checkValue("a"));
  // console.log(checkValue(-1));
} catch (err) {
  console.log(err);
} finally {
  console.log("successfully code was run");
}
