//arithmetic operators
//working with numbers

const wholeNumber = 20;
const decimalNumber = 5.5;

// Addition
const sum = wholeNumber + decimalNumber;
console.log("Addition:", sum); // 25.5

// Subtraction
const difference = wholeNumber - decimalNumber;
console.log("Subtraction:", difference); // 14.5

// Multiplication
const product = wholeNumber * decimalNumber;
console.log("Multiplication:", product); // 110

// Division
const quotient = wholeNumber / decimalNumber;
console.log("Division:", quotient); // 3.6363636363636362

// Modulus
const remainder = wholeNumber % decimalNumber;
console.log("Modulus:", remainder); // 4.5

// Exponentiation
const power = wholeNumber ** 2;
console.log("Exponentiation:", power); // 400

// Increment
let incrementNumber = wholeNumber;
incrementNumber++;
console.log("Increment:", incrementNumber); // 21

// Decrement
let decrementNumber = wholeNumber;
decrementNumber--;
console.log("Decrement:", decrementNumber); // 19   

// Combining multiple operations
const combinedOperation = (wholeNumber + decimalNumber) * 2 - 10 / 2;
console.log("Combined Operation:", combinedOperation); // 41.0  

// Working with negative numbers
const negativeNumber = -10;

// Addition with negative number
const addNegative = wholeNumber + negativeNumber;
console.log("Addition with Negative:", addNegative); // 10          

//not a number (NaN) example
const notANumber = wholeNumber / "hello";
console.log("Not a Number (NaN):", notANumber); // NaN

// Infinity example
const infinityExample = wholeNumber / 0;
console.log("Infinity Example:", infinityExample); // Infinity  

// Checking types
console.log("Type of wholeNumber:", typeof wholeNumber); // number
console.log("Type of decimalNumber:", typeof decimalNumber); // number
console.log("Type of notANumber:", typeof notANumber); // number
console.log("Type of infinityExample:", typeof infinityExample); // number  

// Converting string to number
const stringNumber = "15.5";
const convertedNumber = Number(stringNumber);
console.log("Converted Number:", convertedNumber); // 15.5
console.log("Type of convertedNumber:", typeof convertedNumber); // number

// Rounding numbers
const roundedNumber = Math.round(decimalNumber);
console.log("Rounded Number:", roundedNumber); // 6

const floorNumber = Math.floor(decimalNumber);
console.log("Floor Number:", floorNumber); // 5

const ceilNumber = Math.ceil(decimalNumber);
console.log("Ceil Number:", ceilNumber); // 6

// Generating random numbers
const randomNumber = Math.random() * 100; // Random number between 0 and 100
console.log("Random Number:", randomNumber);

// Finding maximum and minimum
const maxNumber = Math.max(wholeNumber, decimalNumber, 50, 10);
console.log("Maximum Number:", maxNumber); // 50

const minNumber = Math.min(wholeNumber, decimalNumber, 50, 10);
console.log("Minimum Number:", minNumber); // 5.5

// Absolute value
const absoluteValue = Math.abs(negativeNumber);
console.log("Absolute Value:", absoluteValue); // 10

// Square root
const squareRoot = Math.sqrt(wholeNumber);
console.log("Square Root:", squareRoot); // 4.47213595499958    

// Logarithm
const logarithm = Math.log(wholeNumber);
console.log("Logarithm:", logarithm); // 2.995732273553991

// Trigonometric functions
const sineValue = Math.sin(Math.PI / 2); // Sine of 90 degrees
console.log("Sine Value:", sineValue); // 1

const cosineValue = Math.cos(0); // Cosine of 0 degrees
console.log("Cosine Value:", cosineValue); // 1

const tangentValue = Math.tan(Math.PI / 4); // Tangent of 45 degrees
console.log("Tangent Value:", tangentValue); // 1   

// Summary
console.log("Summary of Arithmetic Operations Completed.");

