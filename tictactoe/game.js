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
        document.getElementById("win-line").classList.value = "hidden";
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

    getCurrentColumnsValues() {
        let grid = this.getCurrentGridValues();
        let columns = [];
        for (let i = 0; i < 3; i++) {
            let columnStart = i * 3;
            let column = grid.slice(columnStart, columnStart + 3);
            columns.push(column);
        }
        return columns;
    }

    getCurrentRowsValues() {
        let grid = this.getCurrentGridValues();
        let rows = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = i; j < 9; j += 3) {
                row.push(grid[j])
            }
            rows.push(row);
        }
        return rows;
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
        let winLine = document.getElementById("win-line");
        let possibleWins = this.getPossibleWinsGrid();
        for (let i = 0; i < possibleWins.length; i++) {
            let possibleWin = possibleWins[i]; 
            if (possibleWin.every(e => e == "X") || possibleWin.every(e => e == "O")) {
                this.winner = possibleWin[0];
                this.gameOver = true;
                switch (i) {
                    case 0:
                        winLine.classList.value = "vertical left";
                        break;
                    case 1:
                        winLine.classList.value = "vertical";
                        break;
                    case 2:
                        winLine.classList.value = "vertical right";
                        break;
                    case 3:
                        winLine.classList.value = "horizontal top";
                        break;
                    case 4: 
                        winLine.classList.value = "horizontal";
                        break;
                    case 5:
                        winLine.classList.value = "horizontal bottom";
                        break;
                    case 6:
                        winLine.classList.value = "diagonal left";
                        break;
                    case 7:
                        winLine.classList.value = "diagonal right";
                        break;
                    default:
                        alert("Erro ao determinar células da jogada vencedora. Verifique game.js > TicTacToe().isGameOver() e TicTacToe().getPossibleWinsGrid().");
                        break;
                }
                /* 
                possibleWin = [
                    vertical-top, vertical (center), vertical-bottom, 
                    horizontal-left, horizontal (center), horizontal-right, 
                    diagonal-left, diagonal-right
                ]
                */
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