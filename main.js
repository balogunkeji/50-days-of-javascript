//Data Types
//Value in Javascript are always of a certain types
//There are 8 basic data types in javascript
//1. Numbers -> represent both integer and floating point numbers.
//e.g
let num = 3;
let num2 = 3.555;
//2. BigInt -> represent integers of arbitrary length.
// A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
//3. Strings -> A string must be surrounded
// In JavaScript, there are 3 types of quotes.
// single quotes (''), double quotes ("") and backsticks (``)
const animalName = 'Animal';

//4. Boolean -> it only has two values which are true or false
const truthy = true;
const falsy = false;

//5. Null -> it represent nothing, unknown value, empty.
let age = null;

//6. Undefined -> it means the value is not assigned. it means the variable has no value
let undfnd;
console.log(undfnd)

//7. typeof operator -> The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
// A call to typeof x returns a string with the type name:
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)



