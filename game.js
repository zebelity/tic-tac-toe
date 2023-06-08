
const cells = document.querySelectorAll("#board .data-cell");
const message = document.querySelector("#message");
const playAgainBtn = document.querySelector(".playAgain")
const player = document.querySelector("h4")
const resetBtn = document.querySelector(".reset")
let p1Score = document.querySelector(".p1Score")
let p2Score = document.querySelector(".p2Score")

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
  name: "The Player1"
}
const player2 = {
  name: "The Player2"
}

let currentPlayer = player1.name;
player.innerText = `Current Player: ${currentPlayer}`
let scoresP1 = 0
let scoresP2 = 0

for (const cell of cells) {
  cell.addEventListener("click", handleClick)
}
playAgainBtn.addEventListener("click", handlePlayAgain)
resetBtn.addEventListener("click",handleReset)

function handleClick(event) {
  const targetCell = event.target
  
  //to check cell available
  if (targetCell.classList.contains("selected1")||targetCell.classList.contains("selected2")) {
    return;
  }
  //player choose the cell
  if (currentPlayer === player1.name) {
    targetCell.classList.add("selected1")
    currentPlayer = player2.name
    player.innerText = `Current Player: ${currentPlayer}`
  } else {
    targetCell.classList.add("selected2")
    currentPlayer = player1.name
    player.innerText = `Current Player: ${currentPlayer}`
  }

  let result = checkWinner()
  if (result) {
    if (result === 'draw') {
      message.textContent = `It's Draw!!`
      playAgainBtn.style.display = " block"
      resetBtn.style.display = " block"
    } else {
      message.textContent = `${result.name} wins!`;
      handleScore()
      playAgainBtn.style.display = " block"
      resetBtn.style.display = " block"
    // Disable further cell clicks or take any other necessary action
    }
    
  }
  
}

function checkWinner() {
  for (const win of boardWinning) {
    const [indexA, indexB, indexC] = win;
    const cellA = cells[indexA];
    const cellB = cells[indexB];
    const cellC = cells[indexC];
    
    if ( cellA.classList.contains("selected1") &&
        cellB.classList.contains("selected1") &&
        cellC.classList.contains("selected1")) {
      return player1;
    } else if ( cellA.classList.contains("selected2") &&
        cellB.classList.contains("selected2") &&
        cellC.classList.contains("selected2")) {
      return player2;
    }
  }  
  
    if (document.querySelectorAll(".selected1").length +  document.querySelectorAll(".selected2").length === cells.length) {
    return 'draw'
  }
  return null;
}

function handleScore(event) {
  if (message.textContent === `The Player1 wins!`) {
    scoresP1 = scoresP1 + 1
    p1Score.textContent = scoresP1
  } else {
    scoresP2 = scoresP2 + 1
    p2Score.textContent = scoresP2
  }
}

function handlePlayAgain(event) {
  playAgainBtn.style.display = "none"
  resetBtn.style.display = "none"
  for (const cell of cells) {
    const clearCell = cell.classList
    clearCell.remove("selected1")
    clearCell.remove("selected2")
  }
  message.textContent = ""
}

function handleReset(event) {
  //reset score
  scoresP1 = 0
  scoresP2 = 0
  p1Score.textContent = scoresP1
  p2Score.textContent = scoresP2
  handlePlayAgain()
  currentPlayer = player1.name
  player.innerText = `Current Player: ${currentPlayer}`
}