function displayActivePlayer(activePlayer) {
    document.getElementById("activePlayer").innerHTML = activePlayer;
}

function displayNumberOfMoves(numberOfMoves) {
    document.getElementById("numberOfPerformedMoves").innerHTML = numberOfMoves;
}

function displayMoveHistory() {
    var stringMoveHistory = "";
    for (var i = 0; i < moveHistory.length; i++) {
        stringMoveHistory += moveHistory[i].moveNumber + ": ";
        stringMoveHistory += "player " + moveHistory[i].player + ", ";
        stringMoveHistory += "on square: " + moveHistory[i].squareID + "<br>";
    }
    document.getElementById("moveHistory").innerHTML = stringMoveHistory;
}

function displayBoard() {
    for (var i = 1; i <= board.length; i++) {
        for (j = 1; j <= board[i - 1].length; j++) {
            document.getElementById(i.toString() + j.toString()).innerHTML = board[i - 1][j - 1];
        }
    }
}

function displayStatsAndNextStarter() {
    document.getElementById("winsX").innerHTML = numberOfWinsX;
    document.getElementById("winsO").innerHTML = numberOfWinsO;
    document.getElementById("draws").innerHTML = numberOfDraws;
    document.getElementById("games").innerHTML = (numberOfWinsX + numberOfWinsO + numberOfDraws);
    document.getElementById("nextStarter").innerHTML = nextStarter;
}