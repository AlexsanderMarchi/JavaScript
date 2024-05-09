//strict mode
'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true; // if there is hasDriverLicense (with 's' missing), the console will show the error, but without strict mode, it will only not changed
if (hasDriversLicense) console.log('I can drive :D'); 

//functions
const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
    return juice;


}

const juice = fruitProcessor(5, 0);
console.log(juice);



//Function declaration
function calcAge1(birthYear){
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
}
const age = calcAge1(1991);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991)


//Function expression (Arrow Function)
 const calcAge3 = birthYear => 2037 - birthYear;
    const age3 = calcAge3(1991);

 console.log(age, age2, age3);

 const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    }else{
        console.log(`${firstName} has already retired`)
        return -1;
    }

    // return retirement;
    // return `${firstName} retires in ${retirement} years`
 }

 console.log(yearsUntilRetirement(1991, 'Jonas'));
 console.log(yearsUntilRetirement(1950, 'Jonas2'));

 /*
 CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27. 

*/
const calcAverage = (num1, num2, num3) => (num1+num2+num3)/3 ;

function checkWinner (avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }else if(avgKoalas >= avgDolphins*2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    }else{
        console.log('No team wins...')
    }
    
}

//Data 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

//Data 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);



//Arrays
const friends = ['Michael', 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[friends.length - 1]);

friends[1] = 'Jay';
console.log(friends);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages);

//ADD ELEMENTS
// const newLength = friends.push('Jonas'); // it will save the new length on the const newLength
friends.push('Jonas'); //add a new value in the end of the Array  
friends.unshift('Paul'); //add a new value in the beginning of the Array
console.log(friends);


//REMOVE ELEMENTS
friends.pop(); //Will remove the last one
// const popped = friends.pop(); //Instead of the new length, it'll return the popped element 
friends.shift(); //Will remove the fisrt one
console.log(friends);


console.log(friends.indexOf('Jay')); // WIll Say the index position 
console.log(friends.includes('Bob')); // WIll return a boolean value