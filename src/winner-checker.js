var numberOfWinsX,
    numberOfWinsO,
    numberOfDraws,
    WinnerChecker = function () {

        var checkIfEndOfGame = function (playerChar) {
            if (moveHistory.length >= 5) {
                for (var i = 1; i <= board.length; i++) {
                    if (checkRowsForIdenticalChars(i, playerChar)) {
                        increaseNumberOfWins(playerChar);
                        disableBoard();
                        moveHistory[moveHistory.length - 1].isWin = true;
                        displayStatsAndNextStarter();
                        return ("Player " + playerChar + " won on row " + i + "!");
                    }
                }
                for (var i = 1; i <= board[0].length; i++) {
                    if (checkColumnsForIdenticalChars(i, playerChar)) {
                        increaseNumberOfWins(playerChar);
                        disableBoard();
                        moveHistory[moveHistory.length - 1].isWin = true;
                        displayStatsAndNextStarter();
                        return ("Player " + playerChar + " won on column " + i + "!");
                    }
                }
                for (var i = -1; i <= 1; i += 2) {
                    if (checkDiagonalsForIdenticalChars(i, playerChar)) {
                        increaseNumberOfWins(playerChar);
                        disableBoard();
                        moveHistory[moveHistory.length - 1].isWin = true;
                        displayStatsAndNextStarter();
                        return ("Player " + playerChar + " won on diagonal!");
                    }
                }
                if (moveHistory.length == board.length * board[0].length) {
                    numberOfDraws++;
                    disableBoard();
                    displayStatsAndNextStarter();
                    return ("Draw!");
                }
            }
            return;
        }

        function getCellContentById(id) {
            return board[id.substring(0, 1) - 1][id.substring(1) - 1];
        }

        function areCharsIdentical(a, b, c, playerChar) {
            if (getCellContentById(a) == playerChar && getCellContentById(b) == playerChar && getCellContentById(c) == playerChar) {
                return true;
            }
            return false;
        }

        function checkRowsForIdenticalChars(row, playerChar) {
            if (areCharsIdentical(row.toString() + "1", row.toString() + "2", row.toString() + "3", playerChar)) {
                return true;
            }
            return false;
        }

        function checkColumnsForIdenticalChars(column, playerChar) {
            if (areCharsIdentical("1" + column.toString(), "2" + column.toString(), "3" + column.toString(), playerChar)) {
                return true;
            }
            return false;
        }

        function checkDiagonalsForIdenticalChars(diagonal, playerChar) {
            if (areCharsIdentical((2 - diagonal).toString() + "1", "22", (2 + diagonal).toString() + "3", playerChar)) {
                return true;
            }
            return false;
        }

        function increaseNumberOfWins(playerChar) {
            if (playerChar == 'X') {
                numberOfWinsX++;
            } else {
                if (playerChar == 'O') {
                    numberOfWinsO++;
                }
            }
        }

        function disableBoard() {
            for (var i = 1; i <= board.length; i++) {
                for (var j = 1; j <= board[i - 1].length; j++) {
                    document.getElementById(i.toString() + j.toString()).onclick = null;
                }
            }
        }
        return { checkIfEndOfGame: checkIfEndOfGame };

    }();
