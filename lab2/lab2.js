"use strict";

// Bonus tasks ***************************

// 1-	On your page, show alert for the user that say “Welcome to my site”, 
// then show him prompt ask him to enter his name 
// and write to the page  “ welcome + his name”. 

// alert("Welcome to my site", );

// let name = prompt("Name", "Enter your name");

// document.writeln(`<h1>Welcome ${name}</h1>`);

// 2-	Make a function in external JS file, that takes 2 parameters and return sum of them 
// (function return the result, don't alert or print inside it), and make a button that when clicked; 
//     asks the user to enter 2 numbers (prompt), 
//     call the sum function, and display the result returned by the function in the console.

function sum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        throw new Error("Both arguments must be numbers");
    }
}

document.getElementById('sumButton').onclick = function () {
    let num1 = Number(prompt("Enter first number for sum "));
    let num2 = Number(prompt("Enter second number for sum "));
    let result = sum(num1, num2);
    console.log(`Sum of ${num1} and ${num2} is ${result}`)
};

// 3-	Make a function that takes today’s temperature as a parameter,
//  prints: “HOT” if the entered temperature are more than or equals 30 
// and “Cold” if it’s less than 30 (use ternary conditional operator).

function weather(temperature) {
    if (typeof temperature !== 'number')
        throw new TypeError('Temperature must be a number');

    return (temperature >= 30) ? "Hot" : "Cold";
}
// weather is more than 30
console.log(weather(33)); //  Hot

// weather is less than 30
console.log(weather(20)); //  Cold

// 4-	Change the previous function to take 2 parameters: Temperature and Actual feel temperature to have 3 cases:
// a.	Prints normal if both of temperature and actualFeel between 25 and 30.
// b.	Prints Cold if both of temperature and actualFeel less than 25.
// c.	Prints Hot if both of temperature and actualFeel higher than 30.
// d.	Prints “Ambiguous, can’t detect”, in any different case.

function weather(temperature, feel) {
    if ((temperature >= 25 && temperature <= 30) && (feel >= 25 && feel <= 30)) {
        console.log("Normal");
    } else if (temperature < 25 && feel < 25) {
        console.log("Cold");
    } else if (temperature > 30 && feel > 30) {
        console.log('Hot');
    } else {
        console.log('Ambiguous, can\'t detect');
    }

}
// both temp, feel is between 25 and 30
weather(25, 27); //  Normal

// both temp, feel < 25
weather(20, 15); //  Cold

// both temp, feel > 30
weather(35, 37); //  Hot

// temp is more that 30, feel is less than 30
weather(31, 25); //  Ambiguous, can't detect

// Can you use ternary conditional operator in previous example? Why?
// No, we can't use it here, because there're here more the 2 conditions

// Can you use switch case in previous example? Why?
// We can but it's not best fit because we use switch only when we compare one value
// Against fixed values

// ************************************************************************************************

// 5-	Make a function that takes Student faculty as a parameter, checks:
// a.	If the entered faculty: FCI, show message: “You’re eligible to Programing tracks”.
// b.	If the entered faculty: Engineering, show message: “You’re eligible to Network and Embedded tracks”.
// c.	If the entered faculty: Commerce, show message: “You’re eligible to ERP and Social media tracks”.
// d.	For any other faculty, show message: “You’re eligible to SW fundamentals track”.


function studentFaculty(faculty) {
    switch(faculty){
        case "FCI": 
        console.log('You’re eligible to Programing tracks');
        break;

        case "Engineering":
            console.log('You’re eligible to Network and Embedded tracks')
            break;

        case "Commerce":
            console.log("You’re eligible to ERP and Social media tracks");
            break;
        
        default:
            console.log('You’re eligible to SW fundamentals track');
    }
}

studentFaculty('FCI'); // Programing tracks
studentFaculty('Engineering'); // Network and Embedded tracks
studentFaculty('Commerce'); // ERP and Social media tracks
studentFaculty("Anything"); // SW fundamentals track


// 6-	Write a function that takes 2 parameters: start and end number and print odd numbers between the given 2 numbers.

function oddNumbersRange(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

oddNumbersRange(1, 10); // 1, 3, 5, 7, 9

// 7-	Make a buttons on a page when user clicks it,
//  ask him to enter math expression (Ex. 3+4*5/10*8),
//  and then pass this expression (user input) 
// to a function that take one parameter and execute this expression
// and then show the result of this expression for the user in an alert in
//  that format: (You entered: 3+4*5, and the result is: 23). 

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

// 8-	On contact page prompt user to enter his name, 
// make sure that name is string, 
// and let the user enter his birth year and make sure
//  that it is a number,
//  and it is less than 2010,
//  and then calculate his age.
//  For each prompt if user input valid show him next prompt,
//  if not valid show him the same prompt again until user enters it correctly (use loops).
//  And after validating user input, write all user input on the page in that format:

let name;
let birthYear;

/* Validate name (must be string and not empty) */
while (true) {
    name = prompt("Enter your name:");

    if (name && isNaN(name)) {
        break;
    }
    alert("Invalid name. Please enter a valid string.");
}

/* Validate birth year (number and < 2010) */
while (true) {
    birthYear = Number(prompt("Enter your birth year:"));

    if (!isNaN(birthYear) && birthYear < 2010) {
        break;
    }
    alert("Invalid birth year. Please enter a number less than 2010.");
}

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

/* Display result on page */
document.getElementById("result").innerHTML = `
    Name: ${name}<br>
    Birth year: ${birthYear}<br>
    Age: ${age}
`;
