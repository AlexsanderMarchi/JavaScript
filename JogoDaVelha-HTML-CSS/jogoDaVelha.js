function start(){
    document.getElementById('Welcome').style.display="none";
    document.getElementById('grade').style.display="grid";
}

function buttonClicked(botao, valueInGrid){
    if(botao.innerText != ""){
        return;
    }

    if(turn == "x"){
        botao.innerText = "x";
		turn = "o";
   
    }else{
        botao.innerText = "o";
        turn = "x";
    }

    values[valueInGrid] = botao.innerText;

    if(values[1] == values[2] && values[2] ==  values[3] && values[1] != null ||
        values[4] == values[5] && values[5] ==  values[6] && values[4] != null ||
        values[7] == values[8] && values[8] ==  values[9] && values[7] != null ||
        
        values[1] == values[4] && values[4] ==  values[7] && values[1] != null ||
        values[2] == values[5] && values[5] ==  values[8] && values[2] != null ||
        values[3] == values[6] && values[6] ==  values[9] && values[3] != null ||
        
        values[1] == values[5] && values[5] ==  values[9] && values[1] != null ||
        values[7] == values[5] && values[5] ==  values[3] && values[7] != null ){

            if(botao.innerText == "x"){
                alert(' X win');
            }else{
                alert(' O win');
            }
    }
}

var values = [];
var turn = "x";
