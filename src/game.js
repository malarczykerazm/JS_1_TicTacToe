var numberOfMoves,
    activePlayer,
    nextStarter,
    moveHistory,
    board = [["", "", ""], ["", "", ""], ["", "", ""]];

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
    for (i = 1; i <= board.length; i++) {
        for (j = 1; j <= board[i - 1].length; j++) {
            board[i - 1][j - 1] = "";
            document.getElementById(i.toString() + j.toString()).innerHTML = "";
            document.getElementById(i.toString() + j.toString()).onclick = putChar;
        }
    }
}

putChar = function () {
    board[this.id.substring(0, 1) - 1][this.id.substring(1) - 1] = activePlayer;
    this.innerHTML = activePlayer;
    this.className = activePlayer;
    numberOfMoves++;
    var addedMove = new singleMove(numberOfMoves, activePlayer, this.id);
    moveHistory.push(addedMove);
    this.onclick = null;
    checkIfEndOfGame(activePlayer, board);
    switchActivePlayer(activePlayer);
    displayActivePlayer();
    displayNumberOfMoves();
    displayMoveHistory();
    return addedMove;
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
        board[squareID.substring(0, 1) - 1][squareID.substring(1) - 1] = "";
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
        activePlayer = 'O';
        return activePlayer;
    }
    if (currentActivePlayer == 'O') {
        activePlayer = 'X';
        return activePlayer;
    }
}