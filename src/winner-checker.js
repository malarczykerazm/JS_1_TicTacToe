var rowsToIgnore = [],
    columnsToIgnore = [],
    diagonalsToIgnore = [];
//potrzebne flagi
//SecondDiagonal nie dziala!

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

// function isFirstDiagonalFilled(diagonal) {
//     for (var i = 1; i <= 3; i++) {
//         if (document.getElementById(i.toString() + i.toString()).innerHTML == "") {
//             return false;
//         }
//     }
//     return true;
// }

// function isSecondDiagonalFilled(diagonal) {
//     for (var i = 1; i <= 3; i++) {
//         if (document.getElementById(i.toString() + i.toString()).innerHTML == "") {
//             return false;
//         }
//     }
//     return true;
// }

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
        if (isRowFilled(i) == true) {
            filledRows.push(i);
        }
    }
    return filledRows;
}

findFilledColumns = function (filledColumns) {
    for (var i = 1; i <= 3; i++) {
        if (isColumnFilled(i) == true) {
            filledColumns.push(i);
        }
    }
    return filledColumns;
}

findFilledDiagonals = function (filledDiagonals) {
    for (var i = -1; i < 2; i += 2) {
        if (isDiagonalFilled(i) == true) {
            filledDiagonals.push(i);
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
    // for (var i = 1; i <= 2; i++) {
    //     if (document.getElementById(i.toString() + i.toString()).innerHTML !== document.getElementById((i + 1).toString() + (i + 1).toString()).innerHTML) {
    //         return false;
    //     }
    // }
    // return true;
    for (var i = -1; i < 2; i += 2) {
        if (document.getElementById("22").innerHTML !== document.getElementById((2 + i).toString() + (2 + i * diagonal).toString()).innerHTML) {
            return false;
        }
    }
    return true;
}

function checkIfEndOfGame() {
    var foundRows = [];
    foundRows = findFilledRows(foundRows);
    for (var i = 0; i < foundRows.length; i++) {
        if (areCharsInRowIdentical(foundRows[i]) == true) {
            window.alert("row " + foundRows[i] + " " + document.getElementById(foundRows[i].toString() + 1).innerHTML);
        }
    }
    var foundColumns = [];
    foundColumns = findFilledColumns(foundColumns);
    for (var i = 0; i < foundColumns.length; i++) {
        if (areCharsInColumnIdentical(foundColumns[i]) == true) {
            window.alert("column " + foundColumns[i] + " " + document.getElementById(1 + foundColumns[i].toString()).innerHTML);
        }
    }
    var foundDiagonals = [];
    foundDiagonals = findFilledDiagonals(foundDiagonals);
    for (var i = 0; i < foundDiagonals.length; i++) {
        if (areCharsInDiagonalIdentical(foundDiagonals[i]) == true) {
            window.alert("diagonal " + foundDiagonals[i] + " " + document.getElementById("22").innerHTML);
        }
    }
}