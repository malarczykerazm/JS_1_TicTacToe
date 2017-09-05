var numberOfWinsX,
    numberOfWinsO,
    numberOfDraws,
    WinnerChecker = function () {

        var checkIfEndOfGame = function (playerChar, board, nextStarter, moveHistory) {
            if (moveHistory.length >= 5) {
                for (var i = 1; i <= board.length; i++) {
                    if (checkRowsForIdenticalChars(i, playerChar, board)) {
                        increaseNumberOfWins(playerChar);
                        disableBoard(board);
                        moveHistory[moveHistory.length - 1].isWin = true;
                        displayStatsAndNextStarter(nextStarter);
                        return ("Player " + playerChar + " won on row " + i + "!");
                    }
                }
                for (var i = 1; i <= board[0].length; i++) {
                    if (checkColumnsForIdenticalChars(i, playerChar, board)) {
                        increaseNumberOfWins(playerChar);
                        disableBoard(board);
                        moveHistory[moveHistory.length - 1].isWin = true;
                        displayStatsAndNextStarter(nextStarter);
                        return ("Player " + playerChar + " won on column " + i + "!");
                    }
                }
                for (var i = -1; i <= 1; i += 2) {
                    if (checkDiagonalsForIdenticalChars(i, playerChar, board)) {
                        increaseNumberOfWins(playerChar);
                        disableBoard(board);
                        moveHistory[moveHistory.length - 1].isWin = true;
                        displayStatsAndNextStarter(nextStarter);
                        return ("Player " + playerChar + " won on diagonal!");
                    }
                }
                if (moveHistory.length == board.length * board[0].length) {
                    numberOfDraws++;
                    disableBoard(board);
                    displayStatsAndNextStarter(nextStarter);
                    return ("Draw!");
                }
            }
            return;
        }

        function getCellContentById(id, board) {
            return board[id.substring(0, 1) - 1][id.substring(1) - 1];
        }

        function areCharsIdentical(a, b, c, playerChar, board) {
            if (getCellContentById(a, board) == playerChar && getCellContentById(b, board) == playerChar && getCellContentById(c, board) == playerChar) {
                return true;
            }
            return false;
        }

        function checkRowsForIdenticalChars(row, playerChar, board) {
            if (areCharsIdentical(row.toString() + "1", row.toString() + "2", row.toString() + "3", playerChar, board)) {
                return true;
            }
            return false;
        }

        function checkColumnsForIdenticalChars(column, playerChar, board) {
            if (areCharsIdentical("1" + column.toString(), "2" + column.toString(), "3" + column.toString(), playerChar, board)) {
                return true;
            }
            return false;
        }

        function checkDiagonalsForIdenticalChars(diagonal, playerChar, board) {
            if (areCharsIdentical((2 - diagonal).toString() + "1", "22", (2 + diagonal).toString() + "3", playerChar, board)) {
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

        function disableBoard(board) {
            for (var i = 1; i <= board.length; i++) {
                for (var j = 1; j <= board[i - 1].length; j++) {
                    document.getElementById(i.toString() + j.toString()).onclick = null;
                }
            }
        }
        return { checkIfEndOfGame: checkIfEndOfGame };

    }();
