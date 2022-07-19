"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = void 0;
// The following creates a new module EmailValidator.ts that uses the Validator.ts module
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    // method definition
    EmailValidator.prototype.isValid = function (s) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=appTwo.js.map