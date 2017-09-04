var centralCoordinate = "22",
    numberOfWinsX = 0,
    numberOfWinsO = 0,
    numberOfDraws = 0,
    numberOfGames = 0;

function getContentById(id) {
    return document.getElementById(id).innerHTML;
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
    if (areCharsIdentical((2 - diagonal).toString() + "1", centralCoordinate, (2 + diagonal).toString() + "3", playerChar)) {
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
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            document.getElementById(i.toString() + j.toString()).onclick = null;
        }
    }
}

function displayStatsAndNextStarter() {
    document.getElementById("winsX").innerHTML = numberOfWinsX;
    document.getElementById("winsO").innerHTML = numberOfWinsO;
    document.getElementById("draws").innerHTML = numberOfDraws;
    document.getElementById("games").innerHTML = numberOfGames;
    document.getElementById("nextStarter").innerHTML = nextStarter;
}

function checkIfEndOfGame(playerChar) {
    if (numberOfMoves >= 5) {
        for (var i = 1; i <= 3; i++) {
            if (checkRowsForIdenticalChars(i, playerChar)) {
                increaseNumberOfWins(playerChar);
                numberOfGames++;
                disableTheBoard();
                displayStatsAndNextStarter();
                setTimeout(function () { window.alert("Player " + playerChar + " won on row " + i + "!") }, 10);
                setTimeout(function () { gameInit() }, 10);
                return;
            }
        }
        for (var i = 1; i <= 3; i++) {
            if (checkColumnsForIdenticalChars(i, playerChar)) {
                increaseNumberOfWins(playerChar);
                numberOfGames++;
                disableTheBoard();
                displayStatsAndNextStarter();
                setTimeout(function () { alert("Player " + playerChar + " won on column " + i + "!") }, 10);
                setTimeout(function () { gameInit() }, 10);
                return;
            }
        }
        for (var i = -1; i <= 1; i += 2) {
            if (checkDiagonalsForIdenticalChars(i, playerChar)) {
                increaseNumberOfWins(playerChar);
                numberOfGames++;
                disableTheBoard();
                displayStatsAndNextStarter();
                setTimeout(function () { window.alert("Player " + playerChar + " won on diagonal!") }, 10);
                setTimeout(function () { gameInit() }, 10);
                return;
            }
        }
        if (numberOfMoves == 9) {
            numberOfGames++;
            numberOfDraws++;
            disableTheBoard();
            displayStatsAndNextStarter();
            setTimeout(function () { window.alert("Draw!") }, 10);
            setTimeout(function () { gameInit() }, 10);
            return;
        }
        return;
    }
}
