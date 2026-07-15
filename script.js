const boxes = document.querySelectorAll(".box");
const boxList = ["red", "yellow", "green", "blue"];
let gamePattern = [];
let userPattern = [];
let isGameStarted = false;

//FUNCTIONS

const addGamePattern = () => {
  gamePattern.push(boxList[Math.floor(Math.random() * 4 + 1)]);
};

const answerCheck = (box) => {
  if (userPattern !== gamePattern) {
    wait;
  }
};

const clickedSound = (box) => {
  const boxSound = new Audio(`./sound/${box}.mp3`);
  boxSound.play();
};

//MAIN
document.querySelector("body").addEventListener("keydown", () => {});

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    console.log(event);
    clickedSound(event.target.id);
  });
});
