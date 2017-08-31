var numberOfSteps = 0;
var activePlayer = 'O';


function hello() {
    document.getElementById('hello').innerHTML = "<h3>Welcome to tic tac toe<br><small>let's play a game</small></h3>";
}

function setActivePlayer() {
    if(numberOfSteps % 2 == 0) {
        activePlayer = 'O';
    } else {
        activePlayer = 'X';
    }
    return activePlayer;
}

putChar = function() {
        this.innerHTML = activePlayer;
        numberOfSteps++;
        setActivePlayer();
    }
    
for(i = 0; i < 9; i++) {
    document.getElementById(i).onclick = putChar;
}
