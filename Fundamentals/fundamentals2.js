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

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.
Create an array called tips containing the tip value for each bill, calculated from the function you created before.
BONUS: Create an array totals containing the total values, so the bill + tip.
*/

const bills = [125, 555, 44];

function calcTip (bill){
    if(bill >= 50 && bill<=300){
        const tip = bill * 0.15;
        return tip;
    }else{
        const tip = bill * 0.2;
        return tip;
    }
}
let tips = [];
tips[0] = calcTip(bills[0]);
tips[1] = calcTip(bills[1]);
tips[2] = calcTip(bills[2]);

console.log(tips);

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totals);


//Object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Brothers',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

//    calcAge: function(birthYear){
//         return 2037 - birthYear;
//     } 

    // calcAge: function(){
    //     return 2037 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSumary: function(){
         return `${this.firstName} is a ${this.calcAge()} years old, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }

}
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and the bff is ${jonas.friends[0]}`)

//methods
// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas['calcAge'](jonas.birthYear));
console.log(jonas.calcAge()); //jonas.age was created
console.log(jonas.age);

console.log(jonas.getSumary());

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.
Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}else{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}

//Loop - continue and break

const johnson = [
 'Johnson',92, 1.95, 'Smith'
]
for (let i = 0; i < johnson.length; i++){
    if(typeof johnson[i] !== 'string') continue; //only String
    console.log(johnson[i]);
}
for (let i = 0; i < johnson.length; i++){
    if(typeof johnson[i] === 'number') break; //will break if is number
    console.log(johnson[i]);
}

let dice = Math.trunc(Math.random() * 6) + 1; //A Random Number between 1 and 6
console.log(dice);

/*CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:
First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
Call the function with the totals array.*/


const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalsBT = [];

for(let i = bill.length-1; i >= 0; i--){
    tips[i] = calcTip(bill[i]);
    totalsBT[i] = bill[i]+tips[i];
}
    console.log(totalsBT);