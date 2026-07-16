const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");
const boxList = ["red", "yellow", "green", "blue"];
let gamePattern = [];
let userPattern = [];
let isGameStarted = false;

//FUNCTIONS

const addGamePattern = () => {
  let random = boxList[Math.floor(Math.random() * 4)];
  gamePattern.push(random);
  boxAnimation(random);
  clickedSound(random);
};

const clickedSound = (box) => {
  const boxSound = new Audio(`./sound/${box}.mp3`);
  boxSound.play();
};

const boxAnimation = (box) => {
  document.querySelector(`#${box}`).classList.add("box-active");
  setTimeout(() => {
    document.querySelector(`#${box}`).classList.remove("box-active");
  }, 100);
};

const startGame = () => {
  body.addEventListener("keydown", () => {
    if (!isGameStarted) {
      gamePattern = [];
      levelStart();
      isGameStarted = true;
    } else {
      console.log("Game Already Started!");
    }
  });
};

const checkPattern = () => {
  if (userPattern === gamePattern) {
    levelStarted();
  } else {
    isGameStarted = false;
    startGame();
  }

  // for (let i = 0 ; i < gamePattern.length ; i++){

  // }
};

const levelStart = () => {
  userPattern = [];
  addGamePattern();
};

//MAIN
boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    const boxChoosen = event.target.id;
    clickedSound(boxChoosen);
    boxAnimation(boxChoosen);
    userPattern.push(boxChoosen);
  });
});

startGame();
