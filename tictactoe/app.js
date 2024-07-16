game = new TicTacToe();

instructionsDiv = document.getElementById("instructions");
restartBtn = document.getElementById("restart-btn");

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

for (let cell of game.cells) {
    cell.addEventListener("click", (e) => {
        game.playMove(e.srcElement);
        instructionsDiv.innerHTML = `
            <h5 class="my-3">
                Player ${game.getCurrentPlayer()}
            </h5>
        `;
        
        // Check if game is over
    });
}