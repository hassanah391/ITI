"use strict";

// 1-	Make a buttons on a page when user clicks it, 
// ask him to enter math expression (Ex. 3+4*5/10*8), 
// and then pass this expression (user input) to a function 
// that take one parameter and execute this expression
//  and then show the result of this expression for the user in an alert in that format:
//  (You entered: 3+4*5, and the result is: 23). 

function calculate(expr) {
    return eval(expr);
}

function handleExpression() {
    let expression = prompt("Enter a math expression (ex: 3+4*5/10*8)");

    if (!expression) {
        alert("No expression entered");
        return;
    }

    let result = calculate(expression);

    alert(`You entered: ${expression}, and the result is: ${result}`);
}

// 2-	Create array that contain some tips about JavaScript
//  (Array of 10 strings, each string is tip about JS),
//  and show random tip for the user each time he opens the page "Tip of the day". 

const tips = [
  "Use const and let instead of var to avoid hoisting issues",
  "Arrow functions don't have their own 'this' binding",
  "Use template literals for string interpolation instead of concatenation",
  "Array methods like map, filter, and reduce are powerful for data transformation",
  "Always use strict equality (===) instead of loose equality (==)",
  "Promise.all() can be used to wait for multiple promises to resolve",
  "Destructuring makes it easier to extract values from objects and arrays",
  "Use async/await for cleaner and more readable asynchronous code",
  "Regular expressions can be used for powerful string pattern matching",
  "Use console.time() and console.timeEnd() to measure performance of your code"
];

// Returns random integer between two numbers
// function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min); // Rounds up min
//   const maxFloored = Math.floor(max); // Rounds down max
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }

// alert(tips[getRandomInt(0, 10)]);


// 3-	Make a button that display the current date and time in local format on the page.

function showDate() {
  const now = new Date();
  document.getElementById('date').innerText = now.toLocaleString();
}

// 4-	Ask the user to enter his Email, 
// and use function strings (Don’t use RegExp) 
// to check if the Email contains @ ,
// and not in the first or last index.

const email = prompt("Enter your email");
const len = email.length;

if (email.includes('@') && email[0] !== '@' && email[len - 1] !== '@') {
    alert(`Your email is ${email}`);
} else {
  throw new Error("Invalid email");
}


// 5-	Prompt user to enter his Full Name and email address, 
// and use regular expression only (don't use string functions)
//  to validate his input to make sure it is in correct format using these criteria: 
// a.	Full Name should be characters only (without numbers or special characters)
//  and has the following structure:
// •	Characters (alphabetic only) more than 3.
// •	Then one space.
// •	And finally some other characters (alphabetic only) more than 3 
// •	This pattern may be repeated, so it can contain other spaces
// but after each space must be 3 alphabetic characters at least 
// (like full name, each part is 3 letters at least, and separated by a space).
// •	And shouldn’t start or end with spaces or special characters.

// doing this task in regex section

// const fullName = prompt("Enter your full name");
// const email = prompt("Enter your email");


// 7-	Create an array that hold the following students grades :
//  60, 100,10,15,85, and handle the following:
// a.	Sort the array numerically descending.
// b.	Using the sorted Array find the highest student degree 
// (first degree less than or equal to 100) [Use find()].
// c.	Print the grades of all students with grades below 60 [Use filter()].

let grades = [60, 100, 10, 15, 85];

grades.sort((a, b) => b - a); // [100, 85, 60, 15, 10]
const highestDegree = grades.find(grade => grade <= 100); // returns 100
const filterdGrades = grades.filter( grade => grade < 60); // return [15, 10]

console.log(filterdGrades); // [15, 10]

// 8-	Create an array of objects that hold student name along with his degree 
// (Each element of the array is an object has 2 properties: Name and Degree).
// d.	Find student Name, who got degree between 90 and 100 [Use find()].
// e.	Print students names, who got a degree less than 60 [Use filter()].
// f.	Add a new student to the array [Use push()], and then use for…in to print all elements of the array.
// g.	Remove the last student of the array [Use pop()], and then use for…of to print all elements of the array.
// h.	Sort the array alphabetically based on the student name. 

let students = [
  {
    name: 'hassan',
    degree: 95,
  },
  {
    name: 'medhat',
    degree: 80,
  },
  {
    name: 'hossam',
    degree: 89,
  },
  {
    name: 'emad',
    degree: 50,
  },
  {
    name: 'galal',
    degree: 56,
  }
];

// find student name that he's degree is between 90 and 100
const student = students.find(student => (student.degree >= 90 && student.degree <= 100)); // returns hassan
console.log(student.name); // hassan


// filtering and printing degree < 60
let failedStudents = students.filter(student => student.degree < 60);

failedStudents.forEach(student => console.log(student.name)); // emad, galal

console.log("***************");

// Adding new student to the students array
students.push({
  name: "Linos",
  degree: 100
});
console.log("***************");
// prints all elements of students array
console.log("prints all elements of students array after adding a new student")
for (let i in students) {
  console.log(students[i]);
}

// Removing the latest added element of the students array
students.pop();
console.log("***************");
console.log("prints all elements of students array after removing the latest new student")

// prints all elements of students array
for (let student of students) {
  console.log(student);
}
console.log("***************");
// sorting the array alphabetically based on the student name.
students.sort((a, b) => a.name.localeCompare(b.name));
console.log("Printing students after sorting them basen on names")
// prints sorted students array
for (let student of students) {
  console.log(student);
}
console.log("***************");

// 9-	Show prompt that ask user to enter his birth date 
// and tell user to enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999,
//  and then create function that take user input as a parameter 
// and ensure that the string is entered in this format 
// (that user entered string is 10 characters and contains (-) 
// after the second character and after fifth character).[Don't use RegExp, use string functions].
// k.	If the user input was correct: make the function create new date object,
//  and initialize it with Day, Month,
//  year values (using date constructor: Date(y,m,d))
//  and then show alert to the user with the date in date string format. 
// l.	If user input wasn't correct, show alert saying "Wong Date Format". 
// m.	Create button “show date” that calls the function. 
function validateAndShowBirthDate(userInput) {
  // Check if input exists and is a string
  if (!userInput || typeof userInput !== 'string') {
    return;
  }
  
  // Check if string is exactly 10 characters
  if (userInput.length !== 10) {
    alert("Wrong Date Format");
    return;
  }
  
  // Check if hyphens are at correct positions (index 2 and index 5)
  if (userInput.charAt(2) !== '-' || userInput.charAt(5) !== '-') {
    alert("Wrong Date Format");
    return;
  }
  
  // Extract day, month, year using substring
  const day = userInput.substring(0, 2);
  const month = userInput.substring(3, 5);
  const year = userInput.substring(6, 10);
  
  // Check if all parts are numeric
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Wrong Date Format");
    return;
  }
  
  // Create date object (Date constructor takes year, month (0-indexed), day)
  const dateObj = new Date(year, month - 1, day);
  
  alert(`Your birth date is: ${dateObj.toDateString()}`);
}

function showDateBirth() {
  const userInput = prompt("Enter your birth date in format DD-MM-YYYY (ex: 22-01-1999)");
  validateAndShowBirthDate(userInput);
}
