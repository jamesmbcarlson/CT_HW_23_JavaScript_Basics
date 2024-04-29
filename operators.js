/*
    James Carlson
    Coding Temple - SE FT-144
    Frontend, Module 10 Lesson 1 Assignment: JavaScript Basics and Syntax
*/

// Exploring JavaScript Operators

// Tasks 1 & 2: declaring variables and assigning their values
let num1 = 8;
let num2 = 6;

// Task 3: arithmetic operations
console.log("Sum: ", num1 + num2);
console.log("Diffrence: ", num1 - num2);
console.log("Product: ", num1 * num2);
console.log("Quotient: ", num1 / num2);

// Task 4: assignment operators
console.log("Updated num1: ", num1 += 4);
console.log("Updated num2: ", num2 *= 3);

// Task 5: comparison operators
console.log("Is num1 equal to num2? ", num1 == num2 ? "Yes!" : "Nah..." )
console.log("Is num1 greater than num2?", num1 > num2 ? "Yes!" : "Nope!");
console.log("Is num1 not equal to num2?", num1 != num2 ? "Yes!" : "No!");

// Task 6: logical operators
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 == 0 || num2 % 2 == 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);