let images = [
  "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnRvb258ZW58MHx8MHx8fDA%3D",
  "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600",
];

let a = 0;

document.getElementById("img").innerHTML = `<img src="${images[a]}">`;

function pre() {
  if (a > 0) {
    a--;
  } else {
    a = images.length - 1;
  }
  document.getElementById("img").innerHTML = `<img src="${images[a]}">`;
}
function next() {
  if (a === images.length - 1) {
    a = 0;
  } else {
    a++;
  }
  document.getElementById("img").innerHTML = `<img src="${images[a]}">`;
}
