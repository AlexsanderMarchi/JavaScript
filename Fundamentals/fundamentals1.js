let js = "amazing";

// if (js === "amazing") alert("JavaScript is FUN");

console.log(typeof js); //Show the type of a value

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

console.log(ageJonas > ageSarah); //Should return a boolean value

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

//String
const jonas = "I'm "+firstName+', a '+ (year - birthYear) + ' years old '+job;
console.log(jonas);

//template Literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);


//type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18); //function to convert to number
console.log(Number('Jonas')); //will return NaN (Not a Number), wich the type still a number, but an invalid one


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //will return false
console.log(Boolean(undefined)); //will return false
console.log(Boolean('Paul')); //will return true
console.log(Boolean({})); //will return true

//example
const money = 0; //0 will return false
if(money){
    console.log('Money money money')
}else{
    console.log('get a job')
}

//AND: A && B 
//OR: A || B 
//NOT: !A

/*Exercise: There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.
TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.*/

const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;

console.log(`The average score of Koalas: ${scoreKoalas}, and the average score of Dolphins: ${scoreDolphins}`);

if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy")
}else if (scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy")
}else{
    console.log("Both win the trophy")
}


//expression is what produce a value

//The Conditional (ternary) Operator
const age = 23;
age >= 18 ? console.log("You can drive") : console.log("Can't drive"); //three parts: condition, if part (?) and else part (:)


const drink = age >= 18 ? "yes, Wine" : "no, only Water" //transfprm in an expression
console.log(drink)

/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).*/
const bill = 275;
let tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
