const game = new TicTacToe();
const instructionsDiv = document.getElementById("instructions");
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", () => {
    game.restart()
    instructionsDiv.innerHTML = `
        <p>First Player starts as <strong>Player X</strong> and Second Player as <strong>Player O</strong>.</p>
        <p>Click on the box to start playing as <strong>X</strong>.</p>
    `
});

function printWinner() {
    let msg;
    if (!game.winner) {
        msg = `Tie... No winner.`;
    } else {
        msg = `Player ${game.winner} wins!`;
    }
    instructionsDiv.innerHTML = `
        <h3>
            ${msg}
        </h3>
    `;
}

function printCurrentPlayer() {
    instructionsDiv.innerHTML = `
        <h3>
            Player ${game.getCurrentPlayer()}
        </h3>
    `;
}

for (let cell of game.cells) {
    cell.addEventListener("click", (e) => {
        if (!game.gameOver) {
            game.playMove(e.target);
            if (!game.gameOver) {
                printCurrentPlayer();
                return;
            }
            printWinner();
            return;
        }
        printWinner();
    });
}
