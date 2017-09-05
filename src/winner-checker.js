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
        };

        function areCharsIdentical(i1, j1, i2, j2, i3, j3, playerChar, board) {
            if (board[i1 - 1][j1 - 1] == playerChar && board[i2 - 1][j2 - 1] == playerChar && board[i3 - 1][j3 - 1] == playerChar) {
                return true;
            }
            return false;
        }

        function checkRowsForIdenticalChars(row, playerChar, board) {
            if (areCharsIdentical(row, 1, row, 2, row, 3, playerChar, board)) {
                return true;
            }
            return false;
        }

        function checkColumnsForIdenticalChars(column, playerChar, board) {
            if (areCharsIdentical(1, column, 2, column, 3, column, playerChar, board)) {
                return true;
            }
            return false;
        }

        function checkDiagonalsForIdenticalChars(diagonal, playerChar, board) {
            if (areCharsIdentical((2 - diagonal), 1, 2, 2, (2 + diagonal), 3, playerChar, board)) {
                return true;
            }
            return false;
        }

        function increaseNumberOfWins(playerChar) {
            if (playerChar == 'X') {
                numberOfWinsX++;
            } else if (playerChar == 'O') {
                numberOfWinsO++;
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
