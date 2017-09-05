var nextStarter,
    moveHistory,
    board = [["", "", ""], ["", "", ""], ["", "", ""]];

function begin() {
    competitionInit();
}

function competitionInit() {
    numberOfWinsX = 0;
    numberOfWinsO = 0;
    numberOfDraws = 0;
    nextStarter = 'X';
    gameInit();
}

function startNewCompetition() {
    if (window.confirm("You are going to lose current competition results. Are you sure?")) {
        numberOfWinsX = 0;
        numberOfWinsO = 0;
        numberOfDraws = 0;
        nextStarter = 'X';
        gameInit();
    }
}

function gameInit() {
    board = [["", "", ""], ["", "", ""], ["", "", ""]];
    moveHistory = [];
    displayMoveHistory();
    displayNumberOfMoves(moveHistory.length);
    displayActivePlayer(nextStarter);
    displayStatsAndNextStarter();
    generateEmptyBoard();
    document.getElementById("moveUndo").disabled = false;
}

function displayActivePlayer(activePlayer) {
    document.getElementById("activePlayer").innerHTML = activePlayer;
}

function displayNumberOfMoves(numberOfMoves) {
    document.getElementById("numberOfPerformedMoves").innerHTML = numberOfMoves;
}

function displayMoveHistory() {
    var stringMoveHistory = "";
    for (i = 0; i < moveHistory.length; i++) {
        stringMoveHistory += moveHistory[i].moveNumber + ": ";
        stringMoveHistory += "player " + moveHistory[i].player + ", ";
        stringMoveHistory += "on square: " + moveHistory[i].squareID + "<br>";
    }
    document.getElementById("moveHistory").innerHTML = stringMoveHistory;
}

function generateEmptyBoard() {
    for (i = 1; i <= board.length; i++) {
        for (j = 1; j <= board[i - 1].length; j++) {
            document.getElementById(i.toString() + j.toString()).innerHTML = board[i - 1][j - 1];
            document.getElementById(i.toString() + j.toString()).onclick = putChar;
        }
    }
}

putChar = function () {
    var activePlayer;
    if (moveHistory.length == 0) {
        activePlayer = nextStarter;
    } else {
        activePlayer = switchActivePlayer(moveHistory[moveHistory.length - 1].player);
    }
    board[this.id.substring(0, 1) - 1][this.id.substring(1) - 1] = activePlayer;
    this.innerHTML = activePlayer;
    this.className = activePlayer;
    var addedMove = new singleMove(moveHistory.length + 1, activePlayer, this.id);
    moveHistory.push(addedMove);
    this.onclick = null;
    var message = checkIfEndOfGame(activePlayer);
    displayActivePlayer(switchActivePlayer(activePlayer));
    displayNumberOfMoves(moveHistory.length);
    displayMoveHistory();
    if (message != undefined) {
        setTimeout(function () { window.alert(message) }, 100);
    }
    return addedMove;
}

function singleMove(moveNumber, activePlayer, squareID) {
    this.moveNumber = moveNumber,
        this.player = activePlayer,
        this.squareID = squareID,
        this.isWin = false;
}

function undoMove() {
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
        document.getElementById(removedMove.squareID).innerHTML = "";
        document.getElementById(removedMove.squareID).onclick = putChar;
        displayActivePlayer(removedMove.player);
        displayNumberOfMoves(moveHistory.length);
        displayMoveHistory();
        displayStatsAndNextStarter();
        return removedMove;
    }
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

function switchStarter() {
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