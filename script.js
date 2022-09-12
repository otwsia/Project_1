//Game notification
const gameNoti = document.querySelector(".game-notification");
let gameState = "loading";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function startGame() {
  await delay(750);
  gameNoti.innerText = "Get ready!";
  await delay(1000);
  gameNoti.innerText = "3";
  await delay(1000);
  gameNoti.innerText = "2";
  await delay(1000);
  gameNoti.innerText = "1";
  await delay(1000);
  gameNoti.innerText = "Go!";
  gameState = "running";
  await delay(1000);
  gameNoti.innerText = "Hold Space to move!";
  start();
  countdown();
}

startGame();

//Timer
let timer = 10;
const time = document.querySelector(".game-timer");

async function countdown() {
  while (timer > 0) {
    await delay(1000);
    timer--;
    time.innerText = timer;
  }
  if (timer == 0) {
    gameState = "end";
  }
}

//Doll movement
let lookForward = false;

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
  if (gameState == "running") {
    await sing(Math.random() * 5000 + 3000);
    this.turnForward();
    await check(Math.random() * 3000 + 2000);
    this.turnBack();
    this.start();
  }
}

//Character movement
const character = document.getElementById("player");
let currentLocation = "5px";
const step = 5;
let foot = "left";

window.addEventListener("keydown", function (e) {
  const locale = player.style.left;
  if (e.code == "Space") {
    if (gameState == "running") {
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
  }
});

//Game logic
