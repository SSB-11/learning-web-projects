class TicTacToe {
    constructor() {
        this.cells = document.querySelectorAll(".cell");
        this.restart();
    }

    restart() {
        for (let cell of this.cells) {
            cell.textContent = ".";
        }
        this.currentRound = 1;
        this.winner = undefined;
        this.gameOver = false;
    }

    getCurrentPlayer() {
        if (this.currentRound % 2 != 0) {
            return "X";
        } else {
            return "O";
        }
    }

    getCurrentGridValues() {
        let grid = [];
        for (let cell of this.cells) {
            grid.push(cell.textContent);
        }
        return grid;
    }

    getCurrentRowsValues() {
        let grid = this.getCurrentGridValues();
        let rows = [];
        for (let i = 0; i < 3; i++) {
            let rowStart = i * 3;
            let row = grid.slice(rowStart, rowStart + 3);
            rows.push(row);
        }
        return rows;
    }

    getCurrentColumnsValues() {
        let grid = this.getCurrentGridValues();
        let columns = [];
        for (let i = 0; i < 3; i++) {
            let column = [];
            for (let j = i; j < 9; j += 3) {
                column.push(grid[j])
            }
            columns.push(column);
        }
        return columns;
    }

    getCurrentDiagonalsValues() {
        let rows = this.getCurrentRowsValues();
        let leftRight = [];
        let rightLeft = [];
        for (let i = 0; i < 3; i++) {
            leftRight.push(rows[i][i]);
            rightLeft.push(rows[i][2 - i]);
        }
        return [leftRight, rightLeft];
    }

    getPossibleWinsGrid() {
        return this.getCurrentColumnsValues().concat(
            this.getCurrentRowsValues()
        ).concat(
            this.getCurrentDiagonalsValues()
        );
    }

    playMove(cell) {
        let player = this.getCurrentPlayer();
        if (cell.textContent == "X" || cell.textContent == "O" || this.gameOver == true) {
            return;
        }
        if (player == "X") {
            cell.textContent = "X";
        } else {
            cell.textContent = "O";
        }
        if (!this.isGameOver(this.getCurrentGridValues())) {
            this.currentRound++;
        }
    }

    isGameOver(grid) {
        let possibleWins = this.getPossibleWinsGrid();
        for (let possibleWin of possibleWins) {
            if (possibleWin.every(e => e == "X") || possibleWin.every(e => e == "O")) {
                this.winner = possibleWin[0];
                this.gameOver = true;
                return true;
            }
        }
        if (grid.indexOf(".") == -1) {
            this.winner = null;
            this.gameOver = true;
            return true;
        }
        return false;
    }
}