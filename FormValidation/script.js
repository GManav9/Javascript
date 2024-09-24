let form = document.querySelector("#form");
let arr = [];

document.querySelector("#s").addEventListener("click", (p) => {
  p.preventDefault();
  document.querySelector("#login").style.display = "block";
  document.querySelector("#sign").style.display = "none";
});

document.querySelector("#l").addEventListener("click", (p) => {
  p.preventDefault();
  document.querySelector("#login").style.display = "none";
  document.querySelector("#sign").style.display = "block";
});

form.addEventListener("submit", (e) => {
  let valid = true;
  e.preventDefault();

  document.querySelector("#error1").innerText = "";
  document.querySelector("#error2").innerText = "";
  document.querySelector("#error3").innerText = "";

  document.querySelector("#username").style.border = "";
  document.querySelector("#email").style.border = "";
  document.querySelector("#password").style.border = "";

  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (username == "") {
    document.querySelector("#error1").innerText = "Username is Necessary";
    valid = false;
    document.querySelector("#error1").style.color = "black";
    document.querySelector("#username").style.border = "thin solid red";
  } else if (username.length < 8) {
    document.querySelector("#error1").innerText =
      "Character must be Greater than 8 letters";
    valid = false;
    document.querySelector("#error1").style.color = "black";
    document.querySelector("#username").style.border = "thin solid red";
  }

  if (email == "") {
    document.querySelector("#error2").innerText = "Email is Necessary";
    valid = false;
    document.querySelector("#error2").style.color = "black";
    document.querySelector("#email").style.border = "thin solid red";
  }

  if (password == "") {
    document.querySelector("#error3").innerText = "Password is Necessary";
    valid = false;
    document.querySelector("#error3").style.color = "black";
    document.querySelector("#password").style.border = "thin solid red";
  } else if (password.length < 8) {
    document.querySelector("#error3").innerText =
      "Password must be Greater than 8 letters";
    valid = false;
    document.querySelector("#error.").style.color = "black";
    document.querySelector("#password").style.border = "thin solid red";
  }

  if (valid == true) {
    let obj = {
      username: username,
      email: email,
      password: password,
    };
    arr.push(obj);
    // console.log(arr);
  }
});
