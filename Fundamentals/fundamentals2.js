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
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
 }

 console.log(yearsUntilRetirement(1991, 'Jonas'));