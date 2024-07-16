game = new TicTacToe();

restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", () => {
    game.restartCells(); 
    game.currentRound = 1;
});

function playMove() {
    let player = game.getCurrentPlayer();
    if (player == "X") {
        this.innerHTML = "X";
    } else {
        this.innerHTML = "O";
    }
    game.currentRound++;
}

for (let cell of game.cells) {
    cell.addEventListener("click", playMove);
}