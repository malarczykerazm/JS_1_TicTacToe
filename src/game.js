numberOfMoves = 0;
activePlayer = 'X';
moveHistory = [];

function gameInit() {
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            moveHistory = [];
            numberOfMoves = 0;
            activePlayer = 'X';
            displayActivePlayer();
            displayNumberOfMoves();
            displayEmptyMoveHistory();
            document.getElementById(i.toString() + j.toString()).innerHTML = "";
            document.getElementById(i.toString() + j.toString()).onclick = putChar;
        }
    }
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

function hello() {
    gameInit();
}

function setActivePlayer() {
    if (numberOfMoves % 2 == 0) {
        activePlayer = 'X';
    } else {
        activePlayer = 'O';
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

function singleMove(moveNumber, activePlayer, squareID) {
    this.moveNumber = moveNumber,
        this.player = activePlayer,
        this.squareID = squareID;
}



function undoMove() {
    var square = document.getElementById(moveHistory.pop().squareID);
    square.innerHTML = "";
    square.onclick = putChar;
    numberOfMoves--;
    setActivePlayer();
    displayActivePlayer();
    displayNumberOfMoves();
    displayMoveHistory();
}