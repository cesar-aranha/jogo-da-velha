//Iniciar mihnas varáveis

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(0, 1);
console.log(rndInt);

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = rndInt;
let symbols = ["x", "o"];
let gameOver = false;
let scoreP1 = 0;
let scoreP2 = 0;
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();
    console.log(playerTime);

    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }
  return gameOver;
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}
function isDraw() {
  if (isWin()) {
    return;
  } else {
    for (let i = 0; i < board.length; i++) {
      if (board[i] == "") {
        return false;
      }
    }
    return true;
  }
}
