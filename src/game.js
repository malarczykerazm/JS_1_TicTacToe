var numberOfSteps = 0;
var activePlayer = 'O';
var welcome = "<h3>Welcome to tic tac toe<br><small>let's play a game</small></h3>";
var moveHistory = [];

function displayActivePlayer() {
    document.getElementById("nextPlayer").innerHTML = activePlayer;
}

function displayNumberOfMoves() {
    document.getElementById("numberOfPerformedMoves").innerHTML = numberOfSteps;
}

function hello() {
    document.getElementById("hello").innerHTML = welcome;
    displayActivePlayer();
    displayNumberOfMoves();
}

function setActivePlayer() {
    if(numberOfSteps % 2 == 0) {
        activePlayer = 'O';
    } else {
        activePlayer = 'X';
    }
}

putChar = function() {
    if(this.textContent != "") { return; }
    this.innerHTML = activePlayer;
    numberOfSteps++;
    moveHistory.push(new singleMove(numberOfSteps, activePlayer, this.id));
    setActivePlayer();
    displayActivePlayer();
    displayNumberOfMoves();
    displayMoveHistory();
}

for(i = 0; i < 9; i++) {
    document.getElementById(i).onclick = putChar;
}

function singleMove(moveNumber, activePlayer, squareID) {
    this.moveNumber = moveNumber,
    this.player = activePlayer,
    this.squareID = squareID;
}

function displayMoveHistory() {
    stringMoveHistory = "";
    for(i = 0; i < moveHistory.length; i++) {
        stringMoveHistory += moveHistory[i].moveNumber + ": ";
        stringMoveHistory += "player " + moveHistory[i].player + ", ";
        stringMoveHistory += "on square: " + moveHistory[i].squareID + "<br>";
    }

    document.getElementById("moveHistory").innerHTML = stringMoveHistory;
}

function undoMove() {

}


