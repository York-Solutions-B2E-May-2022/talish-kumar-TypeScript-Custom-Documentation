// tsc app.ts -> Compiles TypeScript into JavaScript (creates it's own file)
// node app.js -> Executes the JavaScript file

/* ------------------------------------------------------------------------ Types in TypeScript ------------------------------------------------------------------------ */

// Type is a convenient way to refer to the different properties and functions that a value has.
// A value is anything that you assign to a variable -> number, string, array, function, object, etc.
// Example: 'Hello' -> string
console.log("Hello".length); // -> 5
console.log("Hello".toLocaleUpperCase()); // -> HELLO

// Primitive types -> string, number, boolean, null, undefined, & symbol
// -> Are used by TypeScript compiler to analyze code for errors
// Object types -> functions, arrays, classes, etc.
// -> Are used to allow the programmer to understand what values are associated with variables

// const heading = document.querySelector("Hi"); // Hovering over 'heading' will show you the type -> Element

// Every value in TypeScript has a type
// Types are just labels that are used to describe the properties and methods that a value has

/* -------------------------------------------------------------------------- Type Annotation -------------------------------------------------------------------------- */

// TypeScript uses type annotations to explicitly specify types for identifiers such as variables, objects, functions, etc.
// Notation -> : type (can be any valid type)
/* Examples:
 * let varName: type;
 * let varName: type = value;
 * const varName: type = value;
 */
let counter: number;
let counterTwo: number = 10; // Can be assigned with type
counter = 1; // Correct
// counter = "Hello" -> Error
// Other examples
let strName: string = "John";
let age: number = 25;
let active: boolean = true;

let names: string[]; // Array of Strings
names = ["John", "Jane", "Peter", "David", "Mary"]; // Arrays start at index 0 - names[0] -> "John" - output -> John

// Objects
let person: {
    name: string;
    age: number;
};
person = {
    name: names[0],
    age: 25
}
console.log(`My name is ${person.name} and I am ${person.age} years old.`);

// Function annotation with parameter and return type
let greeting: (name: string) => string;

// Assign any function that accepts a string and returns a string to the greeting variable
greeting = (name: string) => `Hi ${name}!`;
console.log(greeting(names[0]));

/* -------------------------------------------------------------------------- Type Inference --------------------------------------------------------------------------- */

let counterThree = 0; // TypeScript infers "counterThree" as a number & is equal to -> let counterThree: number = 0;

// Same with function arguments
function increment(counter: number) {
    return ++counter;
}
/* Same as
 *
 * function increment(counter: number) : number {
 *     return ++counter;
 * }
 *
 */

// Common type algorithm -> analyze each candidate and select the type that is compatible with all other candidates
let items = [1, 2, 3, null]; // -> number[] - number array type
let itemsTwo = [1, 2, 3, null, "Hi"]; // -> (number | string)[] - number and string array type
let arr = [new Date(), new RegExp('\d+')]; // -> (RegExp | Date)[] - union array type

// Contextual Typing
/*

* This works because TypeScript knows that the event parameter is an instance of MouseEvent because of "click"
 
 document.addEventListener("click", event => {
    console.log(event.button);
}); 

* This does not work because event in this case is a UIEvent, not a MouseEvent & UIEvent does not have the button property
 
 document.addEventListener("scroll", event => {
    console.log(event.button); // compile error
 });

*/

/* ---------------------------------------------------------------------------- Number Type ---------------------------------------------------------------------------- */

// Decimal Numbers
let newCounter: number = 0;
let x: number = 100, y: number = 200;

// Binary Numbers -> leading zero followed by a lower or uppercase 'b'/'B'
let bin = 0b100;
let anotherBin: number = 0B100;

// Octal Numbers -> leading zero followed by the letter o -> "0o"
let octal: number = 0o10;

// Hexadecimal Numbers -> leading zero followed by a lowercase or uppercase letter 'x'/'X'
let hexNum: number = 0XA;
let anotherHexNum: number = 0x100;

/* ---------------------------------------------------------------------------- String Type ---------------------------------------------------------------------------- */

// Can assign strings in double or single quotes -> Best practice is "" for anything larger than a character and '' for characters
let firstName: string = 'John';
let title: string = "Web Developer";

// Template strings using "`" -> backtick symbol -> (`)
let description = `This TypeScript string 
spans multiple
lines`;
let profile: string = `I'm ${firstName}.
I'm a ${title}.`;
console.log(profile); /* -> 
                       * I'm John.
                       * I'm a Web Developer.
                       * /

/* --------------------------------------------------------------------------- Boolean Type ---------------------------------------------------------------------------- */

// Boolean only allows two values -> true & false
let pending: boolean; // Assign boolean type to pending variable
pending = true;
/*
 *
 * After
 * Some
 * Time
 *
 */
pending = false;

/* --------------------------------------------------------------------------- Object Type ----------------------------------------------------------------------------- */

// Object type represents all values that are not in (primitive types) =>
/* number
 * bigint
 * string
 * boolean
 * null
 * undefined
 * symbol
 */

// let employee: object; -> can also be ->
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
}

employee = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Web Developer"
};

console.log(employee); /* -> 
                        * {
                        *   firstName: "John",
                        *   lastName: "Doe",
                        *   age: 25,
                        *   jobTitle: "Web Developer"
                        * }
                        */

// The empty type
let vacant: {}; // An object that has no property on its own

/* --------------------------------------------------------------------------- Array Type ------------------------------------------------------------------------------ */

// Array is an ORDERED LIST of data.

//Array index start at zero
/* For example -> let numArr: number[] = [10, 20, 30, 40, 50]
 * number[0] -> 10 | number[1] -> 20 | etc.
 */

// Declare Array -> let arrayName: type[];
let skills: string[] = []; // need to assign an empty array, otherwise JavaScript will interpret it as a normal variable
skills[0] = "Problem Solving"; // You have to specify which index you are assigning a value to in an array
skills[1] = "Programming";
console.log(skills[0]); // -> Problem Solving

// Alternatively you can use the "push()" method
skills.push("Software Design");
console.log(skills); // -> [ 'Problem Solving', 'Programming', 'Software Design' ]
console.log(skills[2]); // -> Software Design

// skills.push(100) -> ERROR - Argument type 'number' is not assignable to parameter of type 'string'.

// Array type inference
let skill = skills[0];
console.log(typeof (skill)); // -> string

// Array properties and methods
let series = [1, 2, 3];
// Return the number of elements in the array
console.log(series.length); // -> 3

/* Some useful array methods are ->
 * 
 * forEach()
 * map()
 * reduce()
 * filter()
 *
*/

// Example
let doubleIt = series.map(element => element * 2); // Doubles the value of each element in the array
console.log(doubleIt); // -> [ 2, 4, 6 ]

// Mixed array types
let scores: (string | number)[] = []; // This array can now hold a mix of string and number types
scores = [skills[0], series[0], skills[1], series[1]]; /* Because of type inference, 
                                                        * TypeScript knows that the values
                                                        * in the arrays are of type string and number */
console.log(scores); // -> [ 'Problem Solving', 1, 'Programming', 2 ]

/* --------------------------------------------------------------------------- Tuple Type ------------------------------------------------------------------------------ */

// Tuples are like arrays, however, the number of elements within tuples is fixed and types of elements are known (do not have to be the same)
let tSkill: [string, number] = ["Programming", 5]; // CANNOT BE - [5, "Programming"] - ORDER IS IMPORTANT

// A useful example of a tuple would be to assign a (r,g,b) color set to something
// In a (r,g,b) color code, the number of elements is known, the type is of 'number', and the order of the elements matters
let color: [number, number, number] = [0, 0, 255]; // -> This tuple would represent the color 'Blue'

// You can also have optional elements
let backgroundColor, headerColor: [number, number, number, number?]; // -> RGBA - RED, GREEN, BLUE, ALPHA (Opacity)
backgroundColor = [0, 0, 255, 0.5]; // -> We have set the opacity of the color "Blue" to 0.5 (50%)
headerColor = [0, 255, 0]; // -> The alpha element is optional (hence the '?'), meaning we need not assign a value to it

/* --------------------------------------------------------------------------- Enum Type ------------------------------------------------------------------------------- */

// Enum is a group of named constant values -> stands for enumerated type
// enum name {constant1, constant2, etc...};
// Example ->
enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
};

// A function that tells if a specified Month lies in the summer season
function isItSummer(month: Month) {
    let isSummer: boolean; // Declare a boolean for condition

    switch (month) { // Use a Switch-Case statement to return a value based on the month parameter

        case Month.June:
        case Month.July:
        case Month.August:
            isSummer = true; // For all these conditions, set isSummer to true
            break; // Then break out of this Switch-Case statement

        default: // If none of the cases apply to 'month'
            isSummer = false; // then execute this condition by default
            break; // break out of this Switch-Case block
    }

    return isSummer; // Return our answer
}

console.log(isItSummer(Month.June)); // -> true
console.log(isItSummer(Month.January)); // -> false
console.log(isItSummer(6)); // -> true - CHECK app.js TO SEE WHY THIS WORKS

// TypeScript defines the numeric value of an enum's member based on the order that member appears in the enum definition
/* In JS the Month Var is ->
 * {
  '0': 'Jan', 
  '1': 'Feb', 
  '2': 'Mar', 
  '3': 'Apr', 
  '4': 'May', 
  '5': 'Jun', 
  '6': 'Jul', 
  '7': 'Aug', 
  '8': 'Sep', 
  '9': 'Oct', 
  '10': 'Nov',
  '11': 'Dec',
  Jan: 0,     
  Feb: 1,     
  Mar: 2,     
  Apr: 3,     
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}
*/

/* Use an enum when ->
 * You have a small set of fixed values that are closely related
 * Values are known at compile time
 */

// Example ->
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: "Please approve this request"
};

if (request.status === ApprovalStatus.approved) {
    console.log("Send an email to the Applicant");
    // Real scenario will have actual functionality here 
}

/* ---------------------------------------------------------------------------- Any Type ------------------------------------------------------------------------------- */

// Used when the type of a variable is unknown at time of writing
// Avoid type checking and allow the value to pass through compile-time check

// Example ->
let json = `{"latitude": 10.10, "longitude": 11.11}`; // - May be returned from an API
const currentLocation = JSON.parse(json); // parse JSON to find location (example)
console.log(currentLocation); // -> {latitude: 10.1, longitude: 11.11}

// What happens when accessing a property that doesn't exist?
console.log(currentLocation.x); // -> Does NOT throw an ERROR -> undefined

/* The any type provides you with a way to work with existing JavaScript codebase.
   It allows you to gradually opt-in and opt-out of type checking during compilation.
   You can utilize the any type to migrate existing JavaScript projects to TypeScript. */

// Implicit typing
// Due to type inference in TypeScript
// Creating a variable without specifying a type
// will have TypeScript assume the variable as "any" type

let anyVar; // This is an "any" type variable

// TypeScript will also not throw errors on "any" type variable methods, even if they do not exist
// Example ->
let result: any;
result = 10.123;
console.log(result.toFixed()); // -> 10
//result.willExist();
/* willExist is NOT a valid method for the result variable
 * however, because "result" is of type "any", the compiler
 * will not throw an error. You will get a run-time error! */

/* --------------------------------------------------------------------------- Void Type ------------------------------------------------------------------------------- */

// void type denotes the absence of having any type at all
// You can think of this as the opposite of "any" type

// This function does not return anything (void type)
function log(message): void {
    console.log(message); // This is a console print statement, NOT a return statement
}
log("Hello! I am printing this from a void function."); // -> Hello! I am printing this from a void function.

/* --------------------------------------------------------------------------- Never Type ------------------------------------------------------------------------------ */

// The never type is a type that contains no value
// You cannot assign any value to a variable with a never type
// Use the never type to represent the return type of a function that only throws an error

// Example -> 
function raiseError(message: string): never {
    throw new Error(message);
}
// raiseError("This is a ERROR message thrown from the raiseError function with the 'never' return type!"); <- UNCOMMENT FOR FUNCTIONALITY

// Another example - inferred type "never"
function randomError() {
    return raiseError("Random Error!");
}

// Infinite loop with also be a inferred "never" type
let loop = function forever() {
    while (true) {
        console.log("Please don't run me!"); 
    }
}

// Function without a never type that causes error (not all code paths return something)
function fn(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }

    // Make the function call valid
    return neverOccur();
}
let neverOccur = () => {
    throw new Error("Never");
}

/* --------------------------------------------------------------------------- Union Type ------------------------------------------------------------------------------ */

// Allows you to store a value of one or several types in a variable
// Example - a function that takes both numbers or strings -> adds for numbers and concatenates for strings
function add(a: number | string, b: number | string) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }

    throw new Error("Parameters must be numbers or strings");
}

// Outputs
console.log(add(1, 1)); // -> 2
console.log(add("FirstName ", "LastName")); // -> FirstName LastName
// console.log(add(true, false)) // -> Error

/* --------------------------------------------------------------------------- Type Alias ------------------------------------------------------------------------------ */

// Type aliases allow you to create a new name for an existing type
// Existing type can be any VALID TypeScript type
// type alias = existingType;
type chars = string;
let message: chars; // "message" is now a string type

// It is VERY useful to create type aliases for union types
type alphanumeric = string | number;
let input: alphanumeric; // can now be assigned both strings and numbers

// Example ->
input = 100; // Valid
input = "Hello"; // Valid
// input = false -> ERROR | NOT VALID

/* ---------------------------------------------------------------------- String Literal Type -------------------------------------------------------------------------- */

// String literal type only allows a variable to accept a literal string
// Example ->
let click: "click"; // "click" variable will ONLY accept "click" as it's value
click = "click"; // Valid
// click = "something else" -> NOT VALID

// String literal is useful to limit sting values for a variable
// Combine string literals with union types to create a finite set of values a variable can hold
// Example ->
let mouseEvent: "click" | "altClick" | "dblClick" | "mouseUp" | "mouseDown";
mouseEvent = "click"; // Valid
mouseEvent = "altClick"; // Valid
mouseEvent = "dblClick"; // Valid
mouseEvent = "mouseUp"; // Valid
mouseEvent = "mouseDown"; // Valid
// mouseEvent = "Any other value" -> ERROR

/* ------------------------------------------------------------------- *** END OF BASIC TYPES *** ---------------------------------------------------------------------- */
