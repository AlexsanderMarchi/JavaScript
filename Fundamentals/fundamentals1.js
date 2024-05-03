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