// required tasks ****************************************

// 11-	Create a script that stores student information in variables
//  and outputs a formatted HTML string using document.write().
const student = {
  firstName: "hassan",
  age: 24,
  isEnrolled: true,
  tuitionFee: 12000
};
document.writeln(`<h1> Welcome, ${student.firstName} to ITI website </h1>`);

document.writeln("<h3> Your age is " + student.age + "</h3>");

document.writeln(`<h3> Enrolled: ${student.isEnrolled}` + "</h3>");

document.writeln(`<h3> TuitionFee: ${student.tuitionFee} </h3>`)


// 12-	Write a script that demonstrates JavaScript's arithmetic pitfalls and special number types.

const num1 = 0.1;
const num2 = 0.2;
const sum = num1 + num2;

console.log(sum);

const num3 = 1 / 0;

console.log(num3);

const studentIdBigInt = 98765432123456789n;
console.log(typeof studentIdBigInt);

// 13-	You are building a data parser. You have received raw data as strings and need to convert them.
// Requirements:
// Initialize a variable rawData = "150.55px".
// Convert rawData to an integer using parseInt() and store it in integerVal.
// Convert rawData to a number using parseFloat() and store it in floatVal.
// Convert rawData using the Number() constructor and store it in numberVal.
// Log all three results. (Note: One of them will result in NaN—which one?)

const rawData = "150.55px";

const integrVal = parseInt(rawData);
const floatVal = parseFloat(rawData);
const numberVal = Number(rawData);

console.log("integr: " + integrVal);
console.log("Float: " + floatVal);
console.log("number: " + numberVal) // --> NaN

// 14-	Write a script that evaluates complex logic using Logical Operators (&&, ||, !).
// Requirements:
// Declare var age = 20; and var hasID = true;.
// Create a variable canEnter that is true only if age is greater than 18 AND hasID is true.
// Create a variable isBaby that is true if age is less than 5 OR age is equal to 0.
// Log the results of canEnter and isBaby.

var age = 20;
var hasID = true;
let canEnter = false;
let isBaby = false;

if (age > 18 && hasID)
  canEnter = true;

if (age < 5 || age === 0)
  isBaby = true;

console.log(canEnter + "\n" + isBaby); // canEnter: True, isBaby: False

// 15-	Write a script that proves whether specific values are Truthy or Falsy.
// Requirements:
// Declare variables containing: 0, "0", null, and undefined.
// Use the Boolean() function to convert each variable to a pure boolean.
// Log the result in the format: "Value [x] is: [true/false]".
// Hint: Concatenate the string description with the boolean result.

const num = 0;
const char = "0";
const nul = null;
const unde = undefined;

console.log(`Value [${num}] is: ${Boolean(num)}`); // false
console.log(`Value ['${char}'] is: ${Boolean(char)}`); // true
console.log(`Value [${nul}] is: ${Boolean(nul)}`); // false
console.log(`Value [${unde}] is: ${Boolean(unde)}`); // false

// Review and test the following:

var userName = "Hassan";
console.log(userName); // Hassan

console.log("Start Program")
console.log("Loading...");

if (Boolean([]) === false) {
  console.log("Array is empty");
} // ...

var id = Symbol();
if (!id) {
  console.log("Invalid ID");
}

let speed = Infinity;

if (speed === false) {
  console.log("No speed detected");
}

var $user_name = "Alice";
// var 1stPlace = "Gold Medal";
// var _score = 99;
// var last-name = "Doe";
// var user#id = 101;
var bigNumber = 100n;

// Predict the Output

// Snippet A
var x = 10;
var y = "10";
console.log(x + y); // 1010
console.log(x === y); // flase

// Snippet B
var a = 5;
var b = 5;
console.log(++a); // 6
console.log(b++); // 5
console.log(b); // 6

// The "NaN" Detective
var result1 = undefined + 10; // NaN
var result2 = Number("100px"); // NaN
var result3 = "5" + 2; // 52
