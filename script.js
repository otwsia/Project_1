function dollRotate() {
  document.querySelector(".doll").src = "./images/doll_red.png";
}

setTimeout(dollRotate, 5000);

const character = document.getElementById("player");
let currentLocation = "5px";
const step = 5;
let foot = "left";

window.addEventListener("keydown", function (e) {
  const locale = player.style.left;
  if (e.code == "Space") {
    currentLocation = parseFloat(currentLocation) + step;
    character.style.left = `${currentLocation}px`;
    console.log(character.src);
    if (foot == "left") {
      character.src = "./images/character_right.png";
      foot = "right";
    } else {
      character.src = "./images/character_left.png";
      foot = "left";
    }
  }
});
