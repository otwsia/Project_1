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
  aiMovement(
    "ai_1",
    ai_1,
    ai1Foot,
    ai1Position,
    ai1Status,
    ai1Termination,
    ai_1.style.left
  );
}

window.addEventListener("click", () => startGame(), { once: true });

//Timer
let timer = 60;
const time = document.querySelector(".game-timer");

async function countdown() {
  while (timer > 0 && gameState == "running") {
    await delay(1000);
    timer--;
    time.innerText = timer;
  }
  if (timer == 0) {
    for (const turret of turrets) {
      turret.src = "./images/turret_px_shoot.png";
    }
    gameState = "end";
    await delay(150);
    for (const turret of turrets) {
      turret.src = "./images/turret_px.png";
    }
    character.src = "./images/tombstone.png";
    gameNoti.innerText = "You lost!";
    currentIndicatorLocation = parseFloat(currentIndicatorLocation) + 4;
    character_indicator.style.left = `${currentIndicatorLocation}px`;
    character_indicator.src = "./images/loss_indicator.png";
  }
}

//Doll movement
let lookForward = false;

function turnForward() {
  document.querySelector(".doll").src = "./images/doll_red.png";
  document.querySelector(".game-window").style.borderColor = "#FF1205";
  document.querySelector(".game-window").style.boxShadow = "0 0 1.5vh #FF1205";
  setTimeout(() => (lookForward = true), 400);
}

function turnBack() {
  document.querySelector(".doll").src = "./images/doll_green.png";
  setTimeout(() => (lookForward = false), 200);
  document.querySelector(".game-window").style.borderColor = "#32C732";
  document.querySelector(".game-window").style.boxShadow = "0 0 1.5vh #32c732";
}

function check(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function sing(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function start() {
  if (gameState == "running") {
    await sing(Math.random() * 3000 + 3000);
    this.turnForward();
    await check(Math.random() * 2000 + 2000);
    this.turnBack();
    this.start();
  }
}

//Character movement
const character = document.getElementById("player");
const character_indicator = document.getElementById("player_indicator");
let currentPlayerLocation = "5px";
let currentIndicatorLocation = "18px";
const step = 3;
let foot = "left";

function movement() {
  currentPlayerLocation = parseFloat(currentPlayerLocation) + step;
  character.style.left = `${currentPlayerLocation}px`;
  currentIndicatorLocation = parseFloat(currentIndicatorLocation) + step;
  character_indicator.style.left = `${currentIndicatorLocation}px`;
  if (foot == "left") {
    character.src = "./images/character_right.png";
    foot = "right";
  } else {
    character.src = "./images/character_left.png";
    foot = "left";
  }
}

window.addEventListener("keydown", function (e) {
  if (e.code == "Space") {
    if (gameState == "running") {
      movement();
    }
    checkGameStatus();
  }
});

//Game logic
const turrets = document.querySelectorAll(".turret");

async function checkGameStatus() {
  if (lookForward === true && gameState == "running") {
    for (const turret of turrets) {
      turret.src = "./images/turret_px_shoot.png";
    }
    gameState = "end";
    await delay(150);
    for (const turret of turrets) {
      turret.src = "./images/turret_px.png";
    }
    currentIndicatorLocation = parseFloat(currentIndicatorLocation) + 4;
    character_indicator.style.left = `${currentIndicatorLocation}px`;
    character_indicator.src = "./images/loss_indicator.png";
    character.src = "./images/tombstone.png";
    gameNoti.innerText = "You lost!";
  } else if (character.style.left === "887px" && gameState == "running") {
    gameState = "end";
    gameNoti.innerText = "Congratulations, you won!";
    pose();
  }
}

//Pose
async function pose() {
  await delay(500);
  character.src = "./images/character_look_back.png";
  await delay(1500);
  for (let i = 0; i < 10; i++) {
    movement();
    await delay(300);
  }
  currentIndicatorLocation = parseFloat(currentIndicatorLocation) - 5;
  character_indicator.style.left = `${currentIndicatorLocation}px`;
  character_indicator.src = "./images/win_indicator.png";
  character.src = "./images/character_win.png";
}

//ai movement
const ai_1 = document.querySelector("#ai-1");
const ai_2 = document.querySelector("#ai-2");
let ai1Foot = "left";
let ai2Foot = "left";
let ai1Status = "alive";
let ai2Status = "alive";
let ai1Position = "8px";
let ai2Position = "5px";
const ai1Termination = Math.floor(Math.random() * 300 + 500);
const ai2Termination = Math.floor(Math.random() * 200 + 200);

async function aiMovement(
  imageFile,
  ai,
  aiFoot,
  aiPosition,
  aiStatus,
  aiTermination
) {
  if (parseFloat(aiPosition) < aiTermination) {
    while (lookForward === false && aiStatus === "alive") {
      aiPosition = parseFloat(aiPosition) + step;
      await delay(150);
      console.log(aiPosition);
      // ai.style.left = `${aiPosition}px`;
      // console.log([ai].style.left);
      // await delay(100);
      // if (aiFoot == "left") {
      //   [ai].src = `./images/${imageFile}_right.png`;
      //   aiFoot = "right";
      // } else {
      //   [ai].src = `./images/${imageFile}_right.png`;
      //   aiFoot = "left";
      // }
    }
  }
  // else {
  //   while (aiStatus === "alive") {
  //     aiPosition = parseFloat(aiPosition) + step;
  //     aiStyle = `${aiPosition}px`;
  //     if (aiFoot == "left") {
  //       character.src = `./images/${ai}_right.png`;
  //       aiFoot = "right";
  //     } else {
  //       character.src = `./images/${ai}_right.png`;
  //       aiFoot = "left";
  //     }
  //     checkAiStatus(ai);
  //   }
  // }
}

// async function checkAiStatus(ai, aiStatus) {
//   if (lookForward === true) {
//     for (const turret of turrets) {
//       turret.src = "./images/turret_px_shoot.png";
//     }
//     aiStatus = "dead";
//     await delay(150);
//     for (const turret of turrets) {
//       turret.src = "./images/turret_px.png";
//     }
//     [ai].src = "./images/tombstone.png";
//   }
// }
