// Function to start and reset the game, cleaning the grid and hiding the messages
function start(){
    document.getElementById('Welcome').style.display="none";
    document.getElementById('XWinner').style.display="none";
    document.getElementById('OWinner').style.display="none";
    document.getElementById('draw').style.display="none";   
    document.getElementById('grade').style.display="grid"; //"grid" to only display the game

    // to cleaning the Xs and Os when start or reset
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).innerText = "";
    }

    // reset game variables
    values = [];
    turn = "x";
    draw = 0;
}

// Function put the letter in the grid and see if there is a winner or a draw
function buttonClicked(botao, valueInGrid){

    // If you click in a button that has already a value, it doesn't do anything
    if(botao.innerText != ""){
        return;
    }

    // If is the X turn
    if(turn == "x"){
        botao.innerText = "x";
		turn = "o";
    
    }else{ // If is the O turn
        botao.innerText = "o";
        turn = "x";
    }

    values[valueInGrid] = botao.innerText; // Put the values of the grid in a variable

    // In each game, the variable draw is suming to show the message if the grid is completely full
    for (var i = 1; i <= 9; i++) {
        if(values[i]!= null && values[i]!= ""){
            draw += 1; 
        }
    }

    // All the conditions to win the game
    if(values[1] == values[2] && values[2] ==  values[3] && values[1] != null ||
        values[4] == values[5] && values[5] ==  values[6] && values[4] != null ||
        values[7] == values[8] && values[8] ==  values[9] && values[7] != null ||
        
        values[1] == values[4] && values[4] ==  values[7] && values[1] != null ||
        values[2] == values[5] && values[5] ==  values[8] && values[2] != null ||
        values[3] == values[6] && values[6] ==  values[9] && values[3] != null ||
        
        values[1] == values[5] && values[5] ==  values[9] && values[1] != null ||
        values[7] == values[5] && values[5] ==  values[3] && values[7] != null ){
            
            // If is the X turn, will show a message and hide the grid
            if(botao.innerText == "x"){
                document.getElementById('grade').style.display="none";
                document.getElementById('XWinner').style.display="grid";
            }else{ //Same thing, but is with the O turn
                document.getElementById('grade').style.display="none";
                document.getElementById('OWinner').style.display="grid";   
            }
    }else{ //If the grid is completely full, and has no winner, a message is showed and hide the grid
        if(draw == 45){
            document.getElementById('grade').style.display="none";
            document.getElementById('draw').style.display="grid";   
        }
    }
}

var values = [];    // Variable to get the grid values (to reduce code line)
var turn = "x";     // The game start with X turn
var draw = 0;       // To see in final grid, if it's a Draw