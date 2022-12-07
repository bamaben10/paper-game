// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// const choiceBtns = document.querySelectorAll(".choiceBtn");
// let player;
// let computer;
// let result;

// choiceBtns.forEach((button) =>
//   button.addEventListener("click", () => {
//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
//   })
// );

// function computerTurn() {
//   const randNum = Math.floor(Math.random() * 3) + 1;

//   switch (randNum) {
//     case 1:
//       computer = "ROCK";
//       break;
//     case 2:
//       computer = "PAPER";
//       break;
//     case 3:
//       computer = "SCISSORS";
//       break;
//   }
// }
// function checkWinner() {
//   if (player == computer) {
//     return "Draw!";
//   } else if (computer == "ROCK") {
//     return player == "PAPER" ? "You Win!" : "You Lose!";
//   } else if (computer == "PAPER") {
//     return player == "SCISSORS" ? "You Win!" : "You Lose!";
//   } else if (computer == "SCISSORS") {
//     return player == "ROCK" ? "You Win!" : "You Lose!";
//   }
// }

const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const SELECTIONS = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  console.log(computerSelection);
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText(selection.emoji);
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, opponenetSelection) {
  return selection.beats === opponenetSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}
