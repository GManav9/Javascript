document.getElementById("Dog").addEventListener("click", data);

function data() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      document.getElementById("im").src = res.message;
    })
    .catch((err) => {
      console.log(err);
    });
}

data();