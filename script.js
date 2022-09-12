//Game notification

//Doll movement
function turnForward() {
  document.querySelector(".doll").src = "./images/doll_red.png";
}

function turnBack() {
  document.querySelector(".doll").src = "./images/doll_green.png";
}

function check(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function sing(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function start() {
  await sing(Math.random() * 5000 + 3000);
  this.turnForward();
  await check(Math.random() * 3000 + 2000);
  this.turnBack();
  this.start();
}

start();

//Character movement
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
