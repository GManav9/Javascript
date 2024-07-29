function quo() {
  let q = [
    {
      quote:
        "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
      writer: "William Faulkner",
    },

    {
      quote: "That it will never come again is what makes life so sweet",
      writer: "Emily Dickinson",
    },
    {
      quote: "It is never too late to be what you might have been",
      writer: "George Eliot",
    },
    {
      quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
      writer: " Ralph Waldo Emerson",
    },
    {
      quote: "Pain is inevitable. Suffering is optional.",
      writer: " Haruki Murakami",
    },
    {
      quote: "Be kind, for everyone you meet is fighting a hard battle",
      writer: "Plato",
    },
    {
      quote: "Let me live, love, and say it well in good sentences",
      writer: "Sylvia Plath",
    },
  ];

  let number = Math.floor(Math.random() * q.length);

  // let a = Math.random();
  // let b = a * q.length;
  // let c = Math.round(b);
  // console.log(c);

  document.getElementById(
    "qut"
  ).innerHTML = `<h2> ${q[number].quote} </h2> <h4> ${q[number].writer}</h4>`;
}

quo();
