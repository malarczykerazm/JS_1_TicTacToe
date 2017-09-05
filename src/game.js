var nextStarter,
    moveHistory,
    board,
    Game = function () {

        var competitionInit = function() {
            numberOfWinsX = 0;
            numberOfWinsO = 0;
            numberOfDraws = 0;
            nextStarter = 'X';
            gameInit();
        }

       var startNewCompetition = function() {
            if (window.confirm("You are going to lose current competition results. Are you sure?")) {
                competitionInit();
            }
        }

        var gameInit = function() {
            board = [["", "", ""], ["", "", ""], ["", "", ""]];
            enableEmptyCellsOfBoard();
            moveHistory = [];
            displayMoveHistory();
            displayNumberOfMoves(moveHistory.length);
            displayActivePlayer(nextStarter);
            displayStatsAndNextStarter();
            displayBoard();
        }

        var putChar = function () {
            var activePlayer;
            if (moveHistory.length == 0) {
                activePlayer = nextStarter;
            } else {
                activePlayer = switchActivePlayer(moveHistory[moveHistory.length - 1].player);
            }
            board[this.id.substring(0, 1) - 1][this.id.substring(1) - 1] = activePlayer;
            moveHistory.push(new singleMove(moveHistory.length + 1, activePlayer, this.id));
            this.onclick = null;
            var message = WinnerChecker.checkIfEndOfGame(activePlayer);
            displayBoard();
            displayActivePlayer(switchActivePlayer(activePlayer));
            displayNumberOfMoves(moveHistory.length);
            displayMoveHistory();
            if (message != undefined) {
                setTimeout(function () { window.alert(message) }, 100);
            }
            return moveHistory;
        }

        var undoMove = function () {
            if (moveHistory.length > 0) {
                var removedMove = moveHistory.pop();
                if (removedMove.isWin === true) {
                    if (removedMove.player == 'X') {
                        numberOfWinsX--;
                    } else {
                        numberOfWinsO--;
                    }
                } else if (removedMove.moveNumber == 9) {
                    numberOfDraws--;
                }
                var squareID = removedMove.squareID;
                board[squareID.substring(0, 1) - 1][squareID.substring(1) - 1] = "";
                enableEmptyCellsOfBoard();
                displayBoard();
                displayActivePlayer(removedMove.player);
                displayNumberOfMoves(moveHistory.length);
                displayMoveHistory();
                displayStatsAndNextStarter();
                return moveHistory;
            }
        }

        var switchStarter = function () {
            if (nextStarter == 'X') {
                nextStarter = 'O'
            } else {
                if (nextStarter == 'O') {
                    nextStarter = 'X'
                }
            }
            displayStatsAndNextStarter();
            if (moveHistory.length == 0) {
                displayActivePlayer(nextStarter);
            }
            return nextStarter;
        }

        function singleMove(moveNumber, activePlayer, squareID) {
            this.moveNumber = moveNumber,
                this.player = activePlayer,
                this.squareID = squareID,
                this.isWin = false;
        }

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
                        document.getElementById(i.toString() + j.toString()).onclick = putChar;
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
            };

    }();

    