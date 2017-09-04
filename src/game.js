var numberOfMoves,
    activePlayer,
    nextStarter,
    moveHistory;

function begin() {
    startNewCompetition();
}

function startNewCompetition() {
    numberOfGames = 0;
    numberOfWinsX = 0;
    numberOfWinsO = 0;
    numberOfDraws = 0;
    nextStarter = 'X';
    gameInit();
}

function gameInit() {
    moveHistory = [];
    numberOfMoves = 0;
    activePlayer = nextStarter;
    displayMoveHistory();
    displayNumberOfMoves();
    displayActivePlayer();
    displayStatsAndNextStarter();
    generateEmptyBoard();
}

function displayActivePlayer() {
    document.getElementById("nextPlayer").innerHTML = activePlayer;
}

function displayNumberOfMoves() {
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

function displayEmptyMoveHistory() {
    document.getElementById("moveHistory").innerHTML = "";
}

function generateEmptyBoard() {
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            document.getElementById(i.toString() + j.toString()).innerHTML = "";
            document.getElementById(i.toString() + j.toString()).onclick = putChar;
        }
    }
}

putChar = function () {
    this.innerHTML = activePlayer;
    this.className = activePlayer;
    numberOfMoves++;
    moveHistory.push(new singleMove(numberOfMoves, activePlayer, this.id));
    this.onclick = null;
    displayActivePlayer();
    displayNumberOfMoves();
    displayMoveHistory();
    checkIfEndOfGame(activePlayer);
    switchActivePlayer(activePlayer);
}

function singleMove(moveNumber, activePlayer, squareID) {
    this.moveNumber = moveNumber,
        this.player = activePlayer,
        this.squareID = squareID;
}

function undoMove() {
    if (moveHistory.length > 0) {
        var removedMove = moveHistory.pop();
        var squareID = removedMove.squareID;
        var square = document.getElementById(removedMove.squareID);
        square.innerHTML = "";
        square.onclick = putChar;
        numberOfMoves--;
        switchActivePlayer(activePlayer);
        displayActivePlayer();
        displayNumberOfMoves();
        displayMoveHistory();
        return removedMove;
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
    return nextStarter;
}

function switchActivePlayer(currentActivePlayer) {
    if (currentActivePlayer == 'X') {
        currentActivePlayer = 'O'
        activePlayer = currentActivePlayer;
        return currentActivePlayer;
    }
    if (currentActivePlayer == 'O') {
        currentActivePlayer = 'X'
        activePlayer = currentActivePlayer;
        return currentActivePlayer;
    }
}