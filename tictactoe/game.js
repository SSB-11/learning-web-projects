class TicTacToe {
    constructor() {
        this.currentRound = 1;
        this.cells = document.querySelectorAll(".cell");
    }

    restartCells() {
        let cells = document.querySelectorAll(".cell");
        for (let cell of cells) {
            cell.innerHTML = ".";
        }
    }

    getCurrentPlayer() {
        if (this.currentRound % 2 != 0) {
            return "X";
        } else {
            return "O";
        }
    }

}