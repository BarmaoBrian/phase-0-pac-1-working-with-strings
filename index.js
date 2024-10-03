/*
const greeting = "Hello, Folks" ;


const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

const person = "Mike";
const age = 245;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
*/
/*
const barkCount = 3;
const backtick = `Spinach barks ${barkCount} times`; //=> "Spinach barks 3 times"
const singleQuote = 'Spinach barks ${barkCount} times'; //=> "Spinach barks ${barkCount} times"
const doubleQuote = "Spinach barks ${barkCount} times"; //=> "Spinach barks ${barkCount} times"

const spinach = `Spinach is ${2 + 3} years old`; //=> "Spinach is 5 years old"

console.log(spinach);

console.log(doubleQuote);

console.log(backtick);


function Add (num1,num2){
    return num1 + num2
}


const spenach = `Spenach is ${Add(234,543)} years old`;
console.log(spenach)

*/

const firstName = "Spinachius";
const clanName = "Karbitus";
const commonName = "Maris";
let fullName;

// With +
fullName = firstName + " " + clanName + " " + commonName; //=> "Spinachius Karbitus Maris"

// Or, with interpolation
fullName = `${firstName} ${clanName} ${commonName}`; //=> "Spinachius Karbitus Maris"

// Keep in mind it returns a _new_ String; therefore:
firstName; //=> "Spinachius"
clanName; //=> "Karbitus"
commonName; //=> "Maris"
fullName; //=> "Spinachius Karbitus Maris"

