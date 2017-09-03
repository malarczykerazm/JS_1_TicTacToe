var centralCoordinate = "22",
    rowsToIgnore = [],
    columnsToIgnore = [],
    diagonalsToIgnore = [];

function isRowFilled(row) {
    for (var i = 1; i <= 3; i++) {
        if (document.getElementById(row.toString() + i.toString()).innerHTML == "") {
            return false;
        }
    }
    return true;
}

function isColumnFilled(column) {
    for (var i = 1; i <= 3; i++) {
        if (document.getElementById(i.toString() + column.toString()).innerHTML == "") {
            return false;
        }
    }
    return true;
}

function isDiagonalFilled(diagonal) {
    for (var i = -1; i < 2; i++) {
        if (document.getElementById((2 + i).toString() + (2 + i * diagonal).toString()).innerHTML == "") {
            return false;
        }
    }
    return true;
}

findFilledRows = function (filledRows) {
    for (var i = 1; i <= 3; i++) {
        if (rowsToIgnore.indexOf(i) == -1) {
            if (isRowFilled(i) == true) {
                filledRows.push(i);
            }
        }
    }
    return filledRows;
}

findFilledColumns = function (filledColumns) {
    for (var i = 1; i <= 3; i++) {
        if (columnsToIgnore.indexOf(i) == -1) {
            if (isColumnFilled(i) == true) {
                filledColumns.push(i);
            }
        }
    }
    return filledColumns;
}

findFilledDiagonals = function (filledDiagonals) {
    for (var i = -1; i < 2; i += 2) {
        if (diagonalsToIgnore.indexOf(i) == -1) {
            if (isDiagonalFilled(i) == true) {
                filledDiagonals.push(i);
            }
        }
    }
    return filledDiagonals;
}

function areCharsInRowIdentical(row) {
    for (var i = 1; i <= 2; i++) {
        if (document.getElementById(row.toString() + i.toString()).innerHTML !== document.getElementById(row.toString() + (i + 1).toString()).innerHTML) {
            return false;
        }
    }
    return true;
}

function areCharsInColumnIdentical(column) {
    for (var i = 1; i <= 2; i++) {
        if (document.getElementById(i.toString() + column.toString()).innerHTML !== document.getElementById((i + 1).toString() + column.toString()).innerHTML) {
            return false;
        }
    }
    return true;
}

function areCharsInDiagonalIdentical(diagonal) {
    for (var i = -1; i < 2; i += 2) {
        if (document.getElementById(centralCoordinate).innerHTML !== document.getElementById((2 + i).toString() + (2 + i * diagonal).toString()).innerHTML) {
            return false;
        }
    }
    return true;
}

function checkIfEndOfGame() {
    if (numberOfMoves >= 3) {

        var foundRows = [];
        foundRows = findFilledRows(foundRows);
        for (var i = 0; i < foundRows.length; i++) {
            if (areCharsInRowIdentical(foundRows[i]) == true) {
                window.alert("row " + foundRows[i] + " " + document.getElementById(foundRows[i].toString() + 1).innerHTML);
            } else {
                rowsToIgnore.push(foundRows[i]);
            }
        }
        var foundColumns = [];
        foundColumns = findFilledColumns(foundColumns);
        for (var i = 0; i < foundColumns.length; i++) {
            if (areCharsInColumnIdentical(foundColumns[i]) == true) {
                window.alert("column " + foundColumns[i] + " " + document.getElementById(1 + foundColumns[i].toString()).innerHTML);
            } else {
                columnsToIgnore.push(foundColumns[i]);
            }
        }
        var foundDiagonals = [];
        foundDiagonals = findFilledDiagonals(foundDiagonals);
        for (var i = 0; i < foundDiagonals.length; i++) {
            if (areCharsInDiagonalIdentical(foundDiagonals[i]) == true) {
                window.alert("diagonal " + foundDiagonals[i] + " " + document.getElementById(centralCoordinate).innerHTML);
            } else {
                diagonalsToIgnore.push(foundDiagonals[i]);
            }
        }
        
    }
}