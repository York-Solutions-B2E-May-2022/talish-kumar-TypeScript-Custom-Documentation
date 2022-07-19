"use strict";
// tsc app.ts -> compiles the TypeScript file to a JavaScript Executable
// node app.js -> run the compiled JavaScript file
Object.defineProperty(exports, "__esModule", { value: true });
// You can also export the interface like this ->
// export { Validator };
// You can also rename your exports ->
// export { Validator as StringValidator }; -> will be interpreted as "StringValidator"
// Let's import this module in another file!
// Take a look at the "appTwo.ts" file!
/* ----------------------------------------------------------------------------- Importing ----------------------------------------------------------------------------- */
var appTwo_1 = require("./appTwo");
var email = 'john.doe@typescripttutorial.net';
var validator = new appTwo_1.EmailValidator();
var result = validator.isValid(email);
console.log(result); // -> true
// import type { Alphanumeric } from './app';
// Import everything from a module -> import * from 'module_name';
/* ------------------------------------------------------------------------- Default Exporting ------------------------------------------------------------------------- */
// TypeScript allows each module to have one default export
// To mark an export as a default export, you use the default keyword
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isValid = function (s) {
        var numberRegexp = /^[0-9]+$/;
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.default = ZipCodeValidator;
// importing a default export -> import default_export from 'module_name';
/* ---------------------------------------------------------------------- *** END OF MODULES *** ----------------------------------------------------------------------- */ 
//# sourceMappingURL=app.js.map
