window.addEventListener("load", upstart);

score = 0;

function upstart() {
  console.log("yes");

  document.querySelector("#coin1_container").classList.add("falling");
  document.querySelector("#coin2_container").classList.add("falling");
  document.querySelector("#coin3_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");

  document
    .querySelector("#coin1_container")
    .addEventListener("click", clickCoin);

  document
    .querySelector("#bomb_container")
    .addEventListener("click", clickBomb);

  document
    .querySelector("#coin1_container")
    .addEventListener("animationend", next);
}

function clickCoin() {
  document.querySelector("#coin1_container").classList.add("paused");
  document.querySelector("#coin1_sprite").classList.add("zoom-out");
}

function clickBomb() {
  document.querySelector("#bomb_container").classList.add("paused");
  document.querySelector("#bomb_sprite").classList.add("zoom-in");
}

function next() {
  document.querySelector("#coin1_container").classList.add("move-up");
  nextNext();
}

function nextNext() {
  document.querySelector("#coin1_container").classList.remove("paused");
  document.querySelector("#coin1_sprite").classList.remove("zoom-out");
  document.querySelector("#coin1_container").classList.remove("move-up");

  document.querySelector("#bomb_container").classList.remove("paused");
  document.querySelector("#bomb_sprite").classList.remove("zoom-in");
}
