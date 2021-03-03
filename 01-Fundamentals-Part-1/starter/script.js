/*
// Fundamentals - Part 1 - Values and Variables

// Declaring a variable js with value of amazing and printing to Chrome console
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// Use camelCase for var names
let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// $ and _ are the only symbols allowed in var names
let $function = 27;
console.log($function);

let _name = "Lauren";
console.log(_name);

// Use descriptive variables
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// Don't use vague naming like this
let job1 = 'Programmer';
let job2 = 'Teacher';

// Assignment 1 - LECTURE: Values and Variables
let country = 'United States';
let continent = 'North America';
let population = 3000000;

console.log(country);
console.log(continent);
console.log(population);



// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);



// Variables types - let, const, var
// Clean code = use const by default unless you know the var needs to change later on
// Reduce number of mutations, they can cause bugs later on
// Never use var, it's legacy

let age = 30;
age = 31; // Mutated variable

const birthYear = 1989; // const cannot be changed - immutable
// birthYear = 1990;
// const job; // Requires an initial value
console.log(birthYear);

lastName = 'Church'; // Don't use this since it creates a global object, always properly declare with const
console.log(lastName);



// Basic Operators

// Math operators
const now = 2037
const ageLauren = now - 1989;
const ageLacey = now - 1992;
console.log(ageLauren, ageLacey);

console.log(ageLacey * 2, ageLauren / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Lauren';
const lastName = 'Church';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);


// Comparison operators
console.log(ageLauren > ageLacey); // >, <, >=, <=
console.log(ageLauren >= 50);

const  isFullAge = ageLacey >= 18;

console.log(now - 1989 > now - 1992);


// Operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y)
*/

///////////////////////////
// CODING CHALLENGE #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI'containing information about whether Mark has a higher BMI than John.

Test data:
Data1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

/*
const massMark1 = 78;
const massMark2 = 95;
const heightMark1 = 1.69;
const heightMark2 = 1.88;
const massJohn1 = 92;
const massJohn2 = 85;
const heightJohn1 = 1.95;
const heightJohn2 = 1.76;

// My attempt - works but didn't know where to go after this because I didn't create a specifiy enough variable name for BMI
BMI = massMark1 / heightMark1 ** 2;
console.log(BMI);

// Correct answer - data set 1
const BMIMark1 = massMark1 / heightMark1 ** 2; // Needed to specify BMI as a more descriptive variable
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
const markHigherBMI1 = BMIMark1 > BMIJohn1;

console.log(BMIMark1, BMIJohn1, markHigherBMI1); 

// Correct answer - data set 2
const BMIMark2 = massMark2 / heightMark2 ** 2; // Needed to specify BMI as a more descriptive variable
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(BMIMark2, BMIJohn2, markHigherBMI2); 
*/


/*
// Strings and literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// Old way of writing strings
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

// ES6 way using template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Any regular string...`);

// Old way of multi lines strings
console.log('String with \n\ multiple \n\ lines');

//ES6 way of multi line strings
console.log(`String
with multiple
lines`);
*/


/*
// Making decisions; if / else statements
const age = 19;

if(age >= 18) {
    console.log('Sarah can start driving 😃');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1989;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

///////////////
/// CODING CHALLENGE #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 

Hint: Use an if/elsestatement
*/

/*
// data set 1
const massMark = 95;
const heightMark = 1.88;
const massJohn = 92;
const heightJohn = 1.95;

// // data set 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 85;
// const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2; // Needed to specify BMI as a more descriptive variable
const BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI;

if (BMIMark > BMIJohn) {
    markHigherBMI = (`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    markHigherBMI = (`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

console.log(markHigherBMI);
*/


/*
// Type Conversion and Coercion


// Type conversion
const inputYear = '1989';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); // Number function converts string to number

console.log(Number('Lauren')); // NaN = not a number
console.log(typeof NaN);

console.log(String(23));

// Type coercion
console.log('I am ' + 31 + ' years old.'); // JavaScript converted the number to a string automatically, + operator automatically converts all objects to strings then concatonates. This is the only coercion that does this.
console.log('31' - '10' - 3); // JavaScript converted the strings to numbers automatically
console.log('23' * '2');
console.log('23' > '18');
*/



/* // Truthy / Falsy

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Lauren'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('Height is defined.');
} else {
    console.log('Height is undefined.');
} */

////////////////////////////////////////////////////////
/* // Equality Operators: == vs. === 

const age = 18;
if(age === 18) console.log('Strict'); // Strict equality operator. True or false value.

if (age == 18) console.log('Loose'); // Loose equality operator 
// For clean code, avoid loose equality operator as much as possible.
// Better to convert the value manually than using the loose equality operator.

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite); // Number function converts this from string to number.

if (favorite === 42) { // '42' == 42
    console.log('Cool! 42 is the best number.')
} else if(favorite === 7) {
    console.log('7 is a cool number.')
} else {
    console.log("Number is not 42 or 7.")
}

if(favorite !== 42) console.log('Why not 42?'); */

/* ///////////////////////////
// Boolean logic

age = 16

//  A. Age is greater or equal to 20
//  B. Age is less than 30

// !A // Not A = true
// A AND B // A and B = false
// A OR B = true
// !A AND B = true
// A OR !B = false */


/* ///////////////////////////////
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true AND false = false
console.log(hasDriversLicense || hasGoodVision); // true OR false = true
console.log(!hasDriversLicense); // Not A = false


// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive.')
// } else {
//     console.log('Someone else should drive.')
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired); // true OR true OR true = true

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive.')
} else {
    console.log('Someone else should drive.')
} */


///////////////////////////////////
// CODING CHALLENGE #3

/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus2: Dolphins score 97, 112 and101. Koalas score 109, 95 and 106
*/

/* // data 1 - my attempt
const teamDolphinScore1 = 96
const teamKoalaScore1 = 88
const teamDolphinScore2 = 108
const teamKoalaScore2 = 91
const teamDolphinScore3 = 89
const teamKoalaScore3 = 110

const teamDolphinAverage = (teamDolphinScore1 + teamDolphinScore2 + teamDolphinScore3) / 3;
const teamKoalaAverage = (teamKoalaScore1 + teamKoalaScore2 + teamKoalaScore3) / 3;

if(teamDolphinAverage > teamKoalaAverage) {
    console.log('Team Dolphin has a higher average.')
} else {
    console.log('Team Koala has a higher average.')
} */

/* // data 1 - correct answer
const scoreDolpins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolpins);
console.log(scoreKoalas);

if (scoreDolpins > scoreKoalas) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolpins) {
    console.log('Koalas win the trophy!');
} else if (scoreDolpins === scoreKoalas) {
    console.log('Both win the trophy!');
} */

/* // Bonus 1 - my attempt
const teamDolphinScore1 = 97
const teamDolphinScore2 = 112
const teamDolphinScore3 = 101
const teamKoalaScore1 = 109
const teamKoalaScore2 = 95
const teamKoalaScore3 = 123

const teamDolphinAverage = (teamDolphinScore1 + teamDolphinScore2 + teamDolphinScore3) / 3;
console.log(teamDolphinAverage);
const teamKoalaAverage = (teamKoalaScore1 + teamKoalaScore2 + teamKoalaScore3) / 3;
console.log(teamKoalaAverage);

const minimumScore = 100;
const meetsMinimumScore = true;

if(teamDolphinAverage === meetsMinimumScore) {
    console.log('Team Dolphin averaged at least 100 points!')
} else {
    console.log('Team Dolphin did not meet the minimum score.')
}

if(teamKoalaAverage === meetsMinimumScore) {
    console.log('Team Koala averaged at least 100 points!')
} else {
    console.log('Team Koala did not meet the minimum score.')
} */

// Bonus 1 - correct answer
/* const scoreDolpins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolpins);
console.log(scoreKoalas);

if (scoreDolpins > scoreKoalas && scoreDolpins >= 100) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolpins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy!');
} else if (scoreDolpins === scoreKoalas) {
    console.log('Both win the trophy!');
} */

/* // Bonus 2
const scoreDolpins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolpins);
console.log(scoreKoalas);

if (scoreDolpins > scoreKoalas && scoreDolpins >= 100) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolpins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy!');
} else if (scoreDolpins === scoreKoalas && scoreDolpins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy.');
} */

//////////// Take aways
// Use the values directly (don't need to create variables for everything)
// use logical operators directly in the if/else blocks


///////////////////////////
// The switch statement

const day = 'friday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day.');
}