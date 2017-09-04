var numberOfWinsX = 0,
    numberOfWinsO = 0,
    numberOfDraws = 0;

function getContentById(id) {
    return board[id.substring(0, 1) - 1][id.substring(1) - 1];
}

function areCharsIdentical(a, b, c, playerChar) {
    if (getContentById(a) == playerChar && getContentById(b) == playerChar && getContentById(c) == playerChar) {
        return true;
    }
    return false;
}

function checkRowsForIdenticalChars(row, playerChar) {
    if (areCharsIdentical(row.toString() + "1", row.toString() + "2", row.toString() + "3", playerChar)) {
        return true;
    }
    return false;
}

function checkColumnsForIdenticalChars(column, playerChar) {
    if (areCharsIdentical("1" + column.toString(), "2" + column.toString(), "3" + column.toString(), playerChar)) {
        return true;
    }
    return false;
}

function checkDiagonalsForIdenticalChars(diagonal, playerChar) {
    if (areCharsIdentical((2 - diagonal).toString() + "1", "22", (2 + diagonal).toString() + "3", playerChar)) {
        return true;
    }
    return false;
}

function increaseNumberOfWins(playerChar) {
    if (playerChar == 'X') {
        numberOfWinsX++;
    } else {
        if (playerChar == 'O') {
            numberOfWinsO++;
        }
    }
}

function disableTheBoard() {
    for (i = 1; i <= board.length; i++) {
        for (j = 1; j <= board[i - 1].length; j++) {
            document.getElementById(i.toString() + j.toString()).onclick = null;
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

function checkIfEndOfGame(playerChar) {
    if (moveHistory.length >= 5) {
        for (var i = 1; i <= board.length; i++) {
            if (checkRowsForIdenticalChars(i, playerChar)) {
                increaseNumberOfWins(playerChar);
                disableTheBoard();
                displayStatsAndNextStarter();
                document.getElementById("moveUndo").disabled = true;
                setTimeout(function () { window.alert("Player " + playerChar + " won on row " + i + "!") }, 1);
                return;
            }
        }
        for (var i = 1; i <= board[0].length; i++) {
            if (checkColumnsForIdenticalChars(i, playerChar)) {
                increaseNumberOfWins(playerChar);
                disableTheBoard();
                displayStatsAndNextStarter();
                document.getElementById("moveUndo").disabled = true;
                setTimeout(function () { alert("Player " + playerChar + " won on column " + i + "!") }, 1);
                return;
            }
        }
        for (var i = -1; i <= 1; i += 2) {
            if (checkDiagonalsForIdenticalChars(i, playerChar)) {
                increaseNumberOfWins(playerChar);
                disableTheBoard();
                displayStatsAndNextStarter();
                document.getElementById("moveUndo").disabled = true;
                setTimeout(function () { window.alert("Player " + playerChar + " won on diagonal!") }, 1);
                return;
            }
        }
        if (moveHistory.length == board.length * board[0].length) {
            numberOfDraws++;
            disableTheBoard();
            displayStatsAndNextStarter();
            document.getElementById("moveUndo").disabled = true;
            setTimeout(function () { window.alert("Draw!") }, 1);
            return;
        }
        return;
    }
}
