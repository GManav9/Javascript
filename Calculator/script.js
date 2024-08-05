document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelectorAll("button");
  let heading = document.querySelector(".calculator__output");

  let str = "";
  button.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.value != "=") {
        str += el.value;
        heading.innerHTML = str;
      } else if (el.value == "=") {
        heading.innerHTML = eval(str);
        str = "";
      } else if (el.value == "c") {
        str = "";
        heading.innerHTML = "";
      }
    });
  });
});
