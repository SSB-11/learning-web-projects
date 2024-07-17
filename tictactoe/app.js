const game = new TicTacToe();
const instructionsDiv = document.getElementById("instructions");
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", () => {
    game.restart()
    instructions.innerHTML = `
        <p class="mb-2">
            First Player starts as Player X and Second Player as Player O.
        </p> 
        <p class="mb-4">
            Click on the box to start playing.
        </p>`;
});

function printWinner() {
    let msg;
    if (!game.winner) {
        msg = `Tie... No winner.`;
    } else {
        msg = `Player ${game.winner} wins!`;
    }
    instructionsDiv.innerHTML = `
        <h5 class="my-3">
            ${msg}
        </h5>
    `;
}

function printCurrentPlayer() {
    instructionsDiv.innerHTML = `
        <h5 class="my-3">
            Player ${game.getCurrentPlayer()}
        </h5>
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
