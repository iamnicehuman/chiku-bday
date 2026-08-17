const screens = [
  "intro",
  "quest",
  "character",
  "final"
];

let current = 0;


function nextScreen() {

  document
    .getElementById(screens[current])
    .classList.remove("active");


  current++;

  if (current >= screens.length) {
    current = screens.length - 1;
  }


  document
    .getElementById(screens[current])
    .classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function restart() {

  document
    .getElementById(screens[current])
    .classList.remove("active");


  current = 0;


  document
    .getElementById(screens[current])
    .classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
