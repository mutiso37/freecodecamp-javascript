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

//increement and decrement demonstration
let a = 10;
console.log("Initial value of a:", a); // 10

a++;
console.log("After incrementing, a:", a); // 11

a--;
console.log("After decrementing, a:", a); // 10

a += 5;
console.log("After adding 5, a:", a); // 15

a -= 3;
console.log("After subtracting 3, a:", a); // 12

a *= 2;
console.log("After multiplying by 2, a:", a); // 24

a /= 4;
console.log("After dividing by 4, a:", a); // 6

a %= 4;
console.log("After modulus 4, a:", a); // 2

//compound arithmetic expression
const compoundResult = ((wholeNumber + 10) * 3 - (decimalNumber / 2)) ** 2;
console.log("Compound Arithmetic Expression Result:", compoundResult); // 1521.0

let point = 5;
point += 10; // point = point + 10
console.log("Point after += 10:", point); // 15

point *= 2; // point = point * 2
console.log("Point after *= 2:", point); // 30

point -= 5;
console.log("Point after -= 5:", point); // 25

point /= 5;
console.log("Point after /= 5:", point); // 5

point %= 3;
console.log("Point after %= 3:", point); // 2

// End of arithmetic operations demonstration

const result = "60" / "2";
console.log("Result of '60' / '2':", result);
console.log("Type of result:", typeof result);
// Result of '60' / '2': 30
// Type of result: number
// The division operator converts string operands to numbers before performing the operation.
 const result = "6" - "2";
console.log("Result of '6' - '2':", result);
console.log("Type of result:", typeof result);
// Result of '6' - '2': 4
// Type of result: number
// The subtraction operator converts string operands to numbers before performing the operation.

    const result = "10" * "3";
    console.log("Result of '10' * '3':", result);
    console.log("Type of result:", typeof result);
    // Result of '10' * '3': 30
    // Type of result: number
    // The multiplication operator converts string operands to numbers before performing the operation.
    
const result = "20" + "5";
console.log("Result of '20' + '5':", result);
console.log("Type of result:", typeof result);
// Result of '20' + '5': 205
// Type of result: string
// The addition operator concatenates string operands instead of converting them to numbers.
const result = "8" % "3";
console.log("Result of '8' % '3':", result);
console.log("Type of result:", typeof result);
// Result of '8' % '3': 2
// Type of result: number
// The modulus operator converts string operands to numbers before performing the operation.
const result = "16" ** "2";
console.log("Result of '16' ** '2':", result);
console.log("Type of result:", typeof result);
// Result of '16' ** '2': 256
// Type of result: number
// The exponentiation operator converts string operands to numbers before performing the operation.
const result = "50" + 25;
console.log("Result of '50' + 25:", result);
console.log("Type of result:", typeof result);
// Result of '50' + 25: 5025
// Type of result: string
// The addition operator concatenates the string and number operands, converting the number to a string.

const result = "100" - 40;
console.log("Result of '100' - 40:", result);
console.log("Type of result:", typeof result);
// Result of '100' - 40: 60
// Type of result: number
// The subtraction operator converts the string operand to a number before performing the operation.

const result = "9" * 3;
console.log("Result of '9' * 3:", result);
console.log("Type of result:", typeof result);
// Result of '9' * 3: 27
// Type of result: number
// The multiplication operator converts the string operand to a number before performing the operation.

const result = "45" / 5;
console.log("Result of '45' / 5:", result);
console.log("Type of result:", typeof result);
// Result of '45' / 5: 9
// Type of result: number
// The division operator converts the string operand to a number before performing the operation.

const result = "30" % 4;
console.log("Result of '30' % 4:", result);
console.log("Type of result:", typeof result);
// Result of '30' % 4: 2
// Type of result: number
// The modulus operator converts the string operand to a number before performing the operation.

//string serch and slice operations
const sampleString = "Hello, welcome to the world of JavaScript programming.";

// Searching for a substring
const searchTerm = "JavaScript";
const indexOfSearchTerm = sampleString.indexOf(searchTerm);
console.log(`Index of "${searchTerm}":`, indexOfSearchTerm); // 31

// Slicing a substring
const slicedString = sampleString.slice(7, 14);
console.log("Sliced String:", slicedString); // welcome

// Slicing from a specific index to the end
const slicedToEnd = sampleString.slice(25);
console.log("Sliced to End:", slicedToEnd); // the world of JavaScript programming.

// Slicing with negative indices
const negativeSlice = sampleString.slice(-11);
console.log("Negative Slice:", negativeSlice); // programming.

// Summary of string search and slice operations
console.log("String Search and Slice Operations Completed.");

//using.includes() method
const mainString = "The quick brown fox jumps over the lazy dog.";
const substring1 = "fox";
const substring2 = "cat";

// Check if substring1 is present in mainString
const containsSubstring1 = mainString.includes(substring1);
console.log(`Does the main string contain "${substring1}"?`, containsSubstring1); // true

// Check if substring2 is present in mainString
const containsSubstring2 = mainString.includes(substring2);
console.log(`Does the main string contain "${substring2}"?`, containsSubstring2); // false

// Case-sensitive check
const caseSensitiveCheck = mainString.includes("The");
console.log('Does the main string contain "The"?', caseSensitiveCheck); // true

const caseSensitiveCheckLower = mainString.includes("the");
console.log('Does the main string contain "the"?', caseSensitiveCheckLower); // false

// Summary of includes() method demonstration
console.log("String includes() Method Demonstration Completed.");
// The includes() method checks if a substring exists within a string and returns a boolean value.
const result = "60" / "2";
console.log("Result of '60' / '2':", result);
console.log("Type of result:", typeof result);
// Result of '60' / '2': 30
// Type of result: number
// The division operator converts string operands to numbers before performing the operation.
    const result = "6" - "2";
    console.log("Result of '6' - '2':", result);

    /*working with slice(), indexOf() and lastIndexOf() methods*/

    console.log("Type of result:", typeof result);
    // Result of '6' - '2': 4
    // Type of result: number
    // The subtraction operator converts string operands to numbers before performing the operation.

    const result = "10" * "3";
    console.log("Result of '10' * '3':", result);
    console.log("Type of result:", typeof result);
    // Result of '10' * '3': 30
    // Type of result: number
    // The multiplication operator converts string operands to numbers before performing the operation.
    
const result = "20" + "5";
console.log("Result of '20' + '5':", result);
console.log("Type of result:", typeof result);
// Result of '20' + '5': 205
// Type of result: string
// The addition operator concatenates string operands instead of converting them to numbers.
const result = "8" % "3";
console.log("Result of '8' % '3':", result);
console.log("Type of result:", typeof result);
// Result of '8' % '3': 2
// Type of result: number
// The modulus operator converts string operands to numbers before performing the operation.
const result = "16" ** "2";
console.log("Result of '16' ** '2':", result);
console.log("Type of result:", typeof result);
// Result of '16' ** '2': 256
// Type of result: number
// The exponentiation operator converts string operands to numbers before performing the operation.
const result = "50" + 25;
console.log("Result of '50' + 25:", result);
console.log("Type of result:", typeof result);
// Result of '50' + 25: 5025
// Type of result: string
// The addition operator concatenates the string and number operands, converting the number to a string.

const result = "100" - 40;
console.log("Result of '100' - 40:", result);
console.log("Type of result:", typeof result);
// Result of '100' - 40: 60
// Type of result: number
// The subtraction operator converts the string operand to a number before performing the operation.

const result = "9" * 3;
console.log("Result of '9' * 3:", result);
console.log("Type of result:", typeof result);
// Result of '9' * 3: 27
// Type of result: number
// The multiplication operator converts the string operand to a number before performing the operation.

//replacing a string using string.replce
const originalString = "The sky is blue.";
const stringToReplace = "blue";
const replacementString = "clear";

// Using replace() to replace a substring
const modifiedString = originalString.replace(stringToReplace, replacementString);
console.log("Original String:", originalString); // The sky is blue.
console.log("Modified String:", modifiedString); // The sky is clear.

// Demonstrating that only the first occurrence is replaced
const stringWithMultipleOccurrences = "The cat sat on the mat. The cat is happy.";
const modifiedMultiple = stringWithMultipleOccurrences.replace("cat", "dog");
console.log("Original String with Multiple Occurrences:", stringWithMultipleOccurrences);
console.log("Modified String with Multiple Occurrences:", modifiedMultiple);
// Original String with Multiple Occurrences: The cat sat on the mat. The cat is happy.
// Modified String with Multiple Occurrences: The dog sat on the mat. The cat is happy.

//repeating a string using string.repeat()
const repeatString = "Ha! ";
const numberOfRepeats = 3;
const repeatedString = repeatString.repeat(numberOfRepeats);
console.log("Repeated String:", repeatedString); // Ha! Ha! Ha!

// Summary of replace() and repeat() methods
console.log("String replace() and repeat() Methods Demonstration Completed.");
// The replace() method replaces the first occurrence of a specified substring with another substring.
// The repeat() method creates a new string by repeating the original string a specified number of times.


/*using indexOf() and lastIndexOf() methods*/const text = "JavaScript is a versatile language. JavaScript is widely used.";

// Using indexOf() to find the first occurrence of "JavaScript"
const firstIndex = text.indexOf("JavaScript");
console.log("First occurrence of 'JavaScript':", firstIndex); // 0

// Using lastIndexOf() to find the last occurrence of "JavaScript"
const lastIndex = text.lastIndexOf("JavaScript");
console.log("Last occurrence of 'JavaScript':", lastIndex); //  thirty-six

// Using indexOf() to find a substring that doesn't exist
const notFoundIndex = text.indexOf("Python");
console.log("Index of 'Python':", notFoundIndex); // -1

// Summary of indexOf() and lastIndexOf() methods
console.log("String indexOf() and lastIndexOf() Methods Demonstration Completed.");
// The indexOf() method returns the index of the first occurrence of a specified substring, or -1 if not found.
// The lastIndexOf() method returns the index of the last occurrence of a specified substring, or -1 if not found.
