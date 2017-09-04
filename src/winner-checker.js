var centralCoordinate = "22";

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
        setTimeout(function () { window.alert("Player " + playerChar + " won on row " + row + "!") }, 10);
    }
}

function checkColumnsForIdenticalChars(column, playerChar) {
    if (areCharsIdentical("1" + column.toString(), "2" + column.toString(), "3" + column.toString(), playerChar)) {
        setTimeout(function () { window.alert("Player " + playerChar + " won on column " + column + "!") }, 10);
    }
}

function checkDiagonalsForIdenticalChars(diagonal, playerChar) {
    if (areCharsIdentical((2 - diagonal).toString() + "1", centralCoordinate, (2 + diagonal).toString() + "3", playerChar)) {
        setTimeout(function () { window.alert("Player " + playerChar + " won on diagonal " + diagonal + "!") }, 10);
    }
}

function checkIfEndOfGame(playerChar) {
    if (numberOfMoves >= 5) {
        for (var i = 1; i <= 3; i++) {
            checkRowsForIdenticalChars(i, playerChar);
        }
        for (var i = 1; i <= 3; i++) {
            checkColumnsForIdenticalChars(i, playerChar);
        }
        for (var i = -1; i <= 1; i+=2) {
            checkDiagonalsForIdenticalChars(i, playerChar);
        }
    }
}