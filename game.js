
const cells = document.querySelectorAll('#board .data-cell');
const message = document.querySelector("#message");

const boardWinning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const player1 = {
  currentChoice: null,
  name: "The Player1"
}
const player2 = {
  currentChoice: null,
  name: "The Player2"
}
const computer = {
  currentChoice: null,
  name: "Computer"
}

let currentPlayer = player1;

for (const cell of cells) {
  cell.addEventListener("click", handleClick)
}

//computer make a random choice of cell
// function computerChoose() {
//   const randomCell = Math.floor(Math.random() *9)
//   computer.currentChoice = board[randomCell]
// }

function handleClick(event) {
  const targetCell = event.target

  //add guard in function to check cell avaiable
  if (targetCell.classList.contains("selected1")||targetCell.classList.contains("selected2")) {
    return;
  }
  //player choose the cell
  if (currentPlayer === player1) {
    targetCell.classList.add("selected1")
    currentPlayer = player2
  } else {
    targetCell.classList.add("selected2")
    currentPlayer = player1
  }
  //check if the current player win
  // if(checkedWin(currentPlayer)) {
  //   return message.textContent = `${currentPlayer.name} Wins!!`
  // }
}




