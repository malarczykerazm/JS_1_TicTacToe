Game = function () {

    var board,
        nextStarter,
        moveHistory,

        competitionInit = function () {
            numberOfWinsX = 0;
            numberOfWinsO = 0;
            numberOfDraws = 0;
            nextStarter = 'X';
            Game.gameInit();
        },

        startNewCompetition = function () {
            if (window.confirm("You are going to lose current competition results. Are you sure?")) {
                Game.competitionInit();
            }
        },

        gameInit = function () {
            board = [["", "", ""], ["", "", ""], ["", "", ""]];
            enableEmptyCellsOfBoard();
            moveHistory = [];
            displayMoveHistory(moveHistory);
            displayNumberOfMoves(moveHistory.length);
            displayActivePlayer(nextStarter);
            displayStatsAndNextStarter(nextStarter);
            displayBoard(board);
        },

        putChar = function (square) {
            var activePlayer;
            if (moveHistory.length == 0) {
                activePlayer = nextStarter;
            } else {
                activePlayer = switchActivePlayer(moveHistory[moveHistory.length - 1].player);
            }
            var message;
            if (board[square.id.substring(0, 1) - 1][square.id.substring(1) - 1] == "") {
                board[square.id.substring(0, 1) - 1][square.id.substring(1) - 1] = activePlayer;
                moveHistory.push(new singleMove(moveHistory.length + 1, activePlayer, square.id));
                square.onclick = null;
                message = WinnerChecker.checkIfEndOfGame(activePlayer, board, nextStarter, moveHistory);
                displayActivePlayer(switchActivePlayer(activePlayer));
            }
            displayBoard(board);
            displayNumberOfMoves(moveHistory.length);
            displayMoveHistory(moveHistory);
            if (message != undefined) {
                setTimeout(function () { window.alert(message) }, 100);
            }
            return moveHistory;
        },

        undoMove = function () {
            if (moveHistory.length > 0) {
                var removedMove = moveHistory.pop();
                if (removedMove.isWin === true) {
                    if (removedMove.player == 'X') {
                        numberOfWinsX--;
                    } else if (removedMove.player == 'O') {
                        numberOfWinsO--;
                    }
                } else if (removedMove.moveNumber == 9) {
                    numberOfDraws--;
                }
                var squareID = removedMove.squareID;
                board[squareID.substring(0, 1) - 1][squareID.substring(1) - 1] = "";
                enableEmptyCellsOfBoard();
                displayBoard(board);
                displayActivePlayer(removedMove.player);
                displayNumberOfMoves(moveHistory.length);
                displayMoveHistory(moveHistory);
                displayStatsAndNextStarter(nextStarter);
            }
            return moveHistory;
        },

        switchStarter = function () {
            if (nextStarter == 'X') {
                nextStarter = 'O';
            } else if (nextStarter == 'O') {
                nextStarter = 'X';
            } else {
                nextStarter = 'X';
            }
            displayStatsAndNextStarter(nextStarter);
            if (moveHistory.length == 0) {
                displayActivePlayer(nextStarter);
            }
            return nextStarter;
        };

    function switchActivePlayer(currentActivePlayer) {
        if (currentActivePlayer == 'X') {
            return 'O';
        } else if (currentActivePlayer == 'O') {
            return 'X';
        } else {
            return 'X';
        }
    }

    function enableEmptyCellsOfBoard() {
        for (var i = 1; i <= board.length; i++) {
            for (var j = 1; j <= board[i - 1].length; j++) {
                if (board[i - 1][j - 1] == "") {
                    document.getElementById(i.toString() + j.toString()).onclick = Game.putChar.bind(this, document.getElementById(i.toString() + j.toString()));
                }
            }
        }
    }
    return {
        competitionInit: competitionInit,
        startNewCompetition: startNewCompetition,
        gameInit: gameInit,
        putChar: putChar,
        undoMove: undoMove,
        switchStarter: switchStarter
    }

}();

function singleMove(moveNumber, activePlayer, squareID) {
    this.moveNumber = moveNumber,
        this.player = activePlayer,
        this.squareID = squareID,
        this.isWin = false;
};
