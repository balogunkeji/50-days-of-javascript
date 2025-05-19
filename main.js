//Javascript Operators
// Arithmetic Operators
// + Add -> get the sum of a number
// - Subtract -> get the difference of a number
// * Multiply -> get the product of a number
// ** Exponentiation -> get the power of a number
// / Divide -> get the quotient of a number
// % Modulo -> get the remainder of a number
// Increment -> get the increment of a number
// Decrement -> get the decrement of a number
// Assignment Operators
// = Assign
// += Add and Assign
// -= Subtract and Assign
// *= Multiply and Assign
// /= Divide and Assign
// % Modulo
//Comparison Operators
// ==, != (loose)
// ===, !== (strict)
// >, <, >=, <=
//Logical Operators
// && (AND)
// || (OR)
// ! (NOT)

//let's build a simple calculator with the basic JavaScript operators.
const num1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter the second number:"));
let result;

if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
} else {
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    } else {
        result = "Invalid operator";
    }

    alert(`Result: ${result}`);
}