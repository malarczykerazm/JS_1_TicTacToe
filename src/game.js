var numberOfMoves = 0;
var activePlayer = 'O';
var welcome = "<h3>Welcome to tic tac toe<br><small>let's play a game</small></h3>";
var moveHistory = [];

function displayActivePlayer() {
    document.getElementById("nextPlayer").innerHTML = activePlayer;
}

function displayNumberOfMoves() {
    document.getElementById("numberOfPerformedMoves").innerHTML = numberOfMoves;
}

function hello() {
    document.getElementById("hello").innerHTML = welcome;
    displayActivePlayer();
    displayNumberOfMoves();
}

function setActivePlayer() {
    if (numberOfMoves % 2 == 0) {
        activePlayer = 'O';
    } else {
        activePlayer = 'X';
    }
}

putChar = function () {
    this.innerHTML = activePlayer;
    numberOfMoves++;
    moveHistory.push(new singleMove(numberOfMoves, activePlayer, this.id));
    setActivePlayer();
    displayActivePlayer();
    displayNumberOfMoves();
    displayMoveHistory();
    this.onclick = null;
}

for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
        document.getElementById(i.toString() + j.toString()).onclick = putChar;
    }
}

function singleMove(moveNumber, activePlayer, squareID) {
    this.moveNumber = moveNumber,
        this.player = activePlayer,
        this.squareID = squareID;
}

function displayMoveHistory() {
    stringMoveHistory = "";
    for (i = 0; i < moveHistory.length; i++) {
        stringMoveHistory += moveHistory[i].moveNumber + ": ";
        stringMoveHistory += "player " + moveHistory[i].player + ", ";
        stringMoveHistory += "on square: " + moveHistory[i].squareID + "<br>";
    }

    document.getElementById("moveHistory").innerHTML = stringMoveHistory;
}


function undoMove() {
    square = document.getElementById(moveHistory.pop().squareID);
    square.innerHTML = "";
    square.onclick = putChar;
    numberOfMoves--;
    setActivePlayer();
    displayActivePlayer();
    displayNumberOfMoves();
    displayMoveHistory();
}