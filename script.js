window.addEventListener("load", upstart);

function upstart() {
  console.log("yes");

  document.querySelector("#coin1_container").classList.add("falling");
  document.querySelector("#coin2_container").classList.add("falling");
  document.querySelector("#coin3_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");

  document
    .querySelector("#coin1_container")
    .addEventListener("click", clickCoin);
  console.log("yes");
  document
    .querySelector("#coin1_container")
    .addEventListener("animationend", next);
}

function clickCoin() {
  document.querySelector("#coin1_container").classList.add("paused");
  document.querySelector("#coin1_sprite").classList.add("zoom-out");
}

function next() {
  document.querySelector("#coin1_sprite").classList.remove("zoom-out");
  document.querySelector("#coin1_container").classList.remove("paused");
}
