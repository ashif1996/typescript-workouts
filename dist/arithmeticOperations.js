"use strict";
// Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addition = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.subtraction = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiplication = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.division = function (num1, num2) {
        if (num2 === 0) {
            console.log("\n" + "Division by zero is not allowed.");
            return NaN;
        }
        return num1 / num2;
    };
    return Calculator;
}());
;
var displayMenu = function () {
    console.log();
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
};
var getNumbers = function () {
    var num1 = parseInt(readline_sync_1.default.question("\n" + "Enter the first number: "));
    var num2 = parseInt(readline_sync_1.default.question("Enter the second number: "));
    return { num1: num1, num2: num2 };
};
var main = function () {
    var calculator = new Calculator();
    displayMenu();
    var exit = false;
    while (!exit) {
        var choice = parseInt(readline_sync_1.default.question("\n" + "Enter your choice(1-5): "));
        switch (choice) {
            case 1: {
                var _a = getNumbers(), num1 = _a.num1, num2 = _a.num2;
                var result = calculator.addition(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 2: {
                var _b = getNumbers(), num1 = _b.num1, num2 = _b.num2;
                var result = calculator.subtraction(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 3: {
                var _c = getNumbers(), num1 = _c.num1, num2 = _c.num2;
                var result = calculator.multiplication(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 4: {
                var _d = getNumbers(), num1 = _d.num1, num2 = _d.num2;
                var result = calculator.division(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 5:
                console.log("\n" + "Exiting the program." + "\n");
                exit = true;
                break;
            default:
                console.log("\n" + "Invalid entry. Please try again.");
        }
    }
};
main();
