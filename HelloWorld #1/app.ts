// tsc app.ts -> compiles the TypeScript file to a JavaScript Executable
// node app.js -> run the compiled JavaScript file

/* ------------------------------------------------------------------------ Intro to TypeScript ------------------------------------------------------------------------ */

// TypeScript is a SUPERSET of JavaScript ->
/* TypeScript builds on top of JavaScript.
   First, you write the TypeScript code. => Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler. */

// Why TypeScript? ->
/*
 * Introduces optional types to JavaScript (will be covered later) => '?'
 * Implement planned features of future JavaScript into current JavaScript
 *
 */

// Helps avoid bugs ->
// Function that adds two numbers (in JS)
function add(x, y) {
    return x + y;
}
const result = add('1', '2'); // Will concatenate instead of add
console.log(result); // -> 12

// With TypeScript ->
function tsAdd(x: number, y: number) {
    return x + y;
}

// const tsResult = tsAdd('1', '2'); // Will throw error
const tsResult = tsAdd(1, 2); // -> 3
console.log(tsResult);

/* TS Supports upcoming features ->
 *
 * Stage 0: Strawperson
 * Stage 1: Proposal
 * Stage 2: Draft
 * Stage 3: Candidate -> (TS has features from this stage)
 * Stage 4: Finished
 *
 */

/* ---------------------------------------------------------------------------- Hello World ---------------------------------------------------------------------------- */

/* let message: string = 'Hello, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading); */

/* --------------------------------------------------------------------------- Why Typescript -------------------------------------------------------------------------- */

// TypeScript is DYNAMICALLY TYPED ->
let random;
/* Can be reassigned -> */
random = "Hello";
random = 100;

// Example ->
let example;
console.log(typeof(example)); // -> undefined

example = "Hello";
console.log(typeof (example)); // -> string

example = 100;
console.log(typeof (example)); // -> number

// Solve the issues with dynamic types using interfaces -> defines the contracts within your code & provide explicit names for type checking
// Product object holding product values -> interface defines the shape of the object
interface Product {
    id: number,
    name: string,
    price: number,
};

// Function that returns a product object based on an id -> use the Product type as the return type
function getProduct(id): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

// Initialize a product object with id of 1
const product = getProduct(1);
// Output -> The product Awesome Gadget 1 costs $99.5
console.log(`The product ${product.name} costs $${product.price}`);

// To avoid passing arguments in the wrong order, explicitly assign types to function parameters
const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs $${price}`);
}
const product2 = getProduct(2);
showProduct(product2.name, product2.price);

/* ------------------------------------------------------------------------------- Summary --------------------------------------------------------------------------------
 *
 * JavaScript is dynamically typed. It offers flexibility but also creates many problems.
 * TypeScript adds an optional type system to JavaScript to solve these problems.
 *
*/
