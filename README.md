# Tic Tac Toe Game
This is a Tic Tac Toe game implemented in JavaScript, HTML, and CSS. It allows two players to take turns and compete against each other on a 3x3 grid.

### Technologies Used
* HTML
* CSS
* JavaScript

### Game link
This site was built using [GitHub Pages] (https://zebelity.github.io/tic-tac-toe/).

### Features
![Screenshot of game feature] (/images/TicTactoe_display.jpeg)

- Two players can play the game.
- The game board is displayed on the web page.
- The player 1 is **Pikachu** and the player two is **Charmander**
- Players take turns by clicking on the cells of the grid.
- The game checks for a winner after each move and displays the winning message and get point.
- If no winner is found and all cells are filled, the game ends in a draw.
- Players can restart and reset the game.

### Planning and Development Process
1. Analyzed the requirements and familiarized myself with the game rules.
2. Styled the game board using CSS to make make it easy to visually.
3. Created a basic HTML structure for the game board.
4. Implemented the game logic using JavaScript to handle player turns, marking moves and checking for a win or draw.
5. Tested the game functionality and fixed any bugs or issues that happen.
6. Added additional features, such as a play again button, reset button and player score tracking.
7. Refactored the code to improve readability.

Throughout the development process, I encountered several challenges, such as handling user input validation and preventing players from making invalid moves. I tackled these issues by implementing input checks . I also used DevTools and console logging and debugging techniques to identify and resolve any logical errors in the game logic.

### Unsolved Problems
Although the current version of the game is fully functional, there are some areas that could be improved in future iterations:

- Implement an AI player for single-player mode.
- Allow customization of player names and charactors.

### Favorite Functions

#### `checkWin()`
This function is responsible for checking if a player has won the game. It examines the current state of the game board and checks for any winning combinations of moves. It utilizes condition statement to check and compare with the class of element of cells

#### `resetGame()`

This function is resets the game board, clears player scores, and prepares the game for a new round.

Enjoy playing the Tic Tac Toe game!