const body = document.querySelector(".wrapperBtn")
const cells = document.querySelectorAll("#board .data-cell");
const player = document.querySelector("h4")
const message = document.querySelector("#message");
const playAgainBtn = document.querySelector(".playAgain")
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

let player1 = {
  name: "The Player1",
  score: 0
}
let player2 = {
  name: "The Player2",
  score: 0
}

let currentPlayer = player1.name;
player.innerText = `Current Player: ${currentPlayer}`

for (const cell of cells) {
  cell.addEventListener("click", handleClick)
}
playAgainBtn.addEventListener("click", handlePlayAgain)
resetBtn.addEventListener("click", handleReset)

function handleClick(event) {
  const targetCell = event.target

  if (targetCell.classList.contains("selected1")||targetCell.classList.contains("selected2")) {
    return;
  }
  
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
    message.style.backgroundColor = "#fbf8cc"
    playAgainBtn.style.display = " block"
    resetBtn.style.display = " block"
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    body.style.position = "fixed"
    if (result === 'draw') {
      message.textContent = `It's Draw!!`
    } else {
      message.textContent = `${result.name} wins!`;
      handleScore()
    }
  }
}

function checkWinner() {
  for (const win of boardWinning) {
    const [indexA, indexB, indexC] = win;
    const cellA = cells[indexA];
    const cellB = cells[indexB];
    const cellC = cells[indexC];
    
    if (cellA.classList.contains("selected1") &&
        cellB.classList.contains("selected1") &&
        cellC.classList.contains("selected1")) {
      return player1;
    } else if (cellA.classList.contains("selected2") &&
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
    player1.score = player1.score + 1
    p1Score.textContent = player1.score
  } else {
    player2.score = player2.score + 1
    p2Score.textContent = player2.score
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
  message.style.backgroundColor = "transparent"
  body.style.backgroundColor = "none"
  body.style.position = "relative"
}

function handleReset(event) {
  player1.score = 0
  player2.score = 0
  p1Score.textContent = player1.score
  p2Score.textContent = player2.score
  handlePlayAgain()
  currentPlayer = player1.name
  player.innerText = `Current Player: ${currentPlayer}`
}