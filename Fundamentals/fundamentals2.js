//strict mode
'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true; // if there is hasDriverLicense (with 's' missing), the console will show the error, but without strict mode, it will only not changed
if (hasDriversLicense) console.log('I can drive :D'); 

//functions
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juice = fruitProcessor(5, 0);
console.log(juice);

function calcAge1(birthYear){
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
}
const age = calcAge1(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991)
console.log(age, age2);