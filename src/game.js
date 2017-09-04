var nextStarter,
    moveHistory,
    board = [["", "", ""], ["", "", ""], ["", "", ""]];

function begin() {
    startNewCompetition();
}

function startNewCompetition() {
    numberOfWinsX = 0;
    numberOfWinsO = 0;
    numberOfDraws = 0;
    nextStarter = 'X';
    gameInit();
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
    document.getElementById("nextPlayer").innerHTML = activePlayer;
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
    checkIfEndOfGame(activePlayer);
    displayActivePlayer(switchActivePlayer(activePlayer));
    displayNumberOfMoves(moveHistory.length);
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
        displayActivePlayer(switchActivePlayer(activePlayer));
        displayNumberOfMoves(moveHistory.length);
        displayMoveHistory();
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