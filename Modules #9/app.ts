// tsc app.ts -> compiles the TypeScript file to a JavaScript Executable
// node app.js -> run the compiled JavaScript file

/* ----------------------------------------------------------------------- Introduction to Modules --------------------------------------------------------------------- */

// A TypeScript module can contain both declarations and code
// A module executes within its own scope, not in the global scope
// It means that when you declare variables, functions, classes, interfaces, etc., in a "module"
// they are not visible outside the module unless you explicitly export them using export statement

//  if you want to access variables, functions, classes, etc., from a module, you need to import them using the import statement

// Let's create a module!
// module called Validator.ts and declares an interface named Validator ->
export interface IValidator {

    // method declaration, string parameter, and boolean type
    isValid(s: string): boolean
}

// You can also export the interface like this ->
// export { Validator };

// You can also rename your exports ->
// export { Validator as StringValidator }; -> will be interpreted as "StringValidator"

// Let's import this module in another file!
// Take a look at the "appTwo.ts" file!

/* ----------------------------------------------------------------------------- Importing ----------------------------------------------------------------------------- */

import { EmailValidator } from "./appTwo";

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result); // -> true

// Declaring & Importing types
export type Alphanumeric = string | number;
// import type { Alphanumeric } from './app';

// Import everything from a module -> import * from 'module_name';

/* ------------------------------------------------------------------------- Default Exporting ------------------------------------------------------------------------- */

// TypeScript allows each module to have one default export
// To mark an export as a default export, you use the default keyword

export default class ZipCodeValidator implements IValidator {
    isValid(s: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return s.length === 5 && numberRegexp.test(s);
    }
}

// importing a default export -> import default_export from 'module_name';

/* ---------------------------------------------------------------------- *** END OF MODULES *** ----------------------------------------------------------------------- */