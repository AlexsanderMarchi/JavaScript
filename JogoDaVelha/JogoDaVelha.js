//Entradas 8
var x1 = "__"
var x2 = "__"
var x3 = "__"
var x4 = "__"
var x5 = "__"
var x6 = "__"
var x7 = "__"
var x8 = "__"
var x9 = "__"
var o, x
var part = parseInt(part)
part = 1
var empate = false;
for (part; part <= 5; part++) {
if (part <= 5) {
x = parseInt(prompt("X - Digite o local que voce quer jogar"))
switch (x) {
case 1:
x1 = "X"
break
case 2:
x2 = "X"
break
case 3:
x3 = "X"
break
case 4:
x4 = "X"
break
case 5:
x5 = "X"
break
case 6:
x6 = "X"
break
case 7:
x7 = "X"
break

case 8:
x8 = "X"
break
case 9:
x9 = "X"
break
}
alert("Rodada " + part + "\n" +
" " +x1 + " | " + x2 + " | " + x3 + "\n" +
" " +x4 + " | " + x5 + " | " + x6 + "\n" +
" " +x7 + " | " + x8 + " | " + x9)
if(x1 == "X" && x2 == "X" && x3 == "X" ||
x4 == "X" && x5 == "X" && x6 == "X" ||
x7 == "X" && x8 == "X" && x9 == "X" ||
x1 == "X" && x4 == "X" && x7 == "X" ||
x2 == "X" && x5 == "X" && x8 == "X" ||
x3 == "X" && x6 == "X" && x9 == "X" ||
x1 == "X" && x5 == "X" && x9 == "X" ||
x3 == "X" && x5 == "X" && x7 == "X") {
alert("Jogador X ganhou")
empate = true
break;
}
}

if (part <= 4) {
o = parseInt(prompt("O - Digite o local que voce quer jogar"))
switch (o) {
case 1:
x1 = "O"
break
case 2:
x2 = "O"
break
case 3:
x3 = "O"
break
case 4:

x4 = "O"
break
case 5:
x5 = "O"
break
case 6:
x6 = "O"
break
case 7:
x7 = "O"
break
case 8:
x8 = "O"
break
case 9:
x9 = "O"
break
}
alert("Rodada " + part + "\n" +
" " +x1 + " | " + x2 + " | " + x3 + "\n" +
" " +x4 + " | " + x5 + " | " + x6 + "\n" +
" " +x7 + " | " + x8 + " | " + x9)
if (x1 == "O" && x2 == "O" && x3 == "O" ||
x4 == "O" && x5 == "O" && x6 == "O" ||
x7 == "O" && x8 == "O" && x9 == "O" ||
x1 == "O" && x4 == "O" && x7 == "O" ||
x2 == "O" && x5 == "O" && x8 == "O" ||
x3 == "O" && x6 == "O" && x9 == "O" ||
x1 == "O" && x5 == "O" && x9 == "O" ||
x3 == "O" && x5 == "O" && x7 == "O") {
alert("Jogador O ganhou")
empate = true
break;
}
}
}
if(!empate){
alert("Nenhum ganhador, empate")
}