var numberOfMoves = 0,
    activePlayer = 'X',
    moveHistory = [];

function gameInit() {
    moveHistory = [];
    numberOfMoves = 0;
    activePlayer = 'X';
    displayMoveHistory();
    displayNumberOfMoves();
    displayActivePlayer();
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

function begin() {
    gameInit();
}

function switchActivePlayer() {
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
    switchActivePlayer();
    displayActivePlayer();
    displayNumberOfMoves();
    displayMoveHistory();
    this.onclick = null;
    checkIfEndOfGame();
}

function singleMove(moveNumber, activePlayer, squareID) {
    this.moveNumber = moveNumber,
        this.player = activePlayer,
        this.squareID = squareID;
}

function undoMove() {
    var squareID = moveHistory.pop().squareID;
    var square = document.getElementById(squareID);

    rowsToIgnore.splice(rowsToIgnore.indexOf(squareID.substring(0, 1)), 1);
    columnsToIgnore.splice(columnsToIgnore.indexOf(squareID.substring(1, 2)), 1);
    var whichDiagonal;
    if (squareID = centralCoordinate) {
        diagonalsToIgnore = [];
    } else {
        if (squareID.substring(0, 1) == squareID.substring(0, 1)) {
            diagonalsToIgnore.splice(diagonalsToIgnore.indexOf(1), 1);

        } else {
            diagonalsToIgnore.splice(diagonalsToIgnore.indexOf(-1), 1);
        }

    }

    square.innerHTML = "";
    square.onclick = putChar;
    numberOfMoves--;
    switchActivePlayer();
    displayActivePlayer();
    displayNumberOfMoves();
    displayMoveHistory();
}