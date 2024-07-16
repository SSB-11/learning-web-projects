// let currentRound = 1;

// function restartGame() {
//     for (let cell of document.querySelectorAll(".cell")) {
//         cell.innerHTML = ".";
//     }
//     currentRound = 1;
// }

// function getCurrentPlayer() {
//     if (currentRound % 2 != 0) {
//         return "X";
//     } else {
//         return "O";
//     }
// }

// function playMove() {
    
//     if (currentRound % 2 != 0) {
//         player = "X";
//     }
//     if (player == "X") {
//         this.innerHTML = "X";
//     } else {
//         this.innerHTML = "O";
//     }
//     currentRound++;
// }

// restartBtn = document.getElementById("restart-btn");
// restartBtn.addEventListener("click", restartGame);

// for (let cell of document.querySelectorAll(".cell")) {
//     cell.addEventListener("click", playMoveFromPlayer)
// }

game = new TicTacToe();

function restartGame() {

}

restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", () => {game.restartCells(); game.currentRound = 1;});


// for (let cell of document.querySelectorAll(".cell")) {
//     cell.addEventListener("click", playMoveFromPlayer)
// }

