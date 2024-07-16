class TicTacToe {
    constructor() {
        this.currentRound = 1;
        this.cells = document.querySelectorAll(".cell");
    }

    restart() {
        for (let cell of this.cells) {
            cell.innerHTML = ".";
        }
        this.currentRound = 1;
    }

    getCurrentPlayer() {
        if (this.currentRound % 2 != 0) {
            return "X";
        } else {
            return "O";
        }
    }

    playMove(cell) {
        let player = this.getCurrentPlayer();
        if (cell.innerHTML == "X" || cell.innerHTML == "O") {
            return;
        }

        if (player == "X") {
            cell.innerHTML = "X";
        } else {
            cell.innerHTML = "O";
        }
        this.currentRound++;
    }

    // Check if game is over

}