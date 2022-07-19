// To consume a module, you use the import statement
import { IValidator } from "./app";

// The following creates a new module EmailValidator.ts that uses the Validator.ts module
class EmailValidator implements IValidator {

    // method definition
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

// Let's export this class
export { EmailValidator };