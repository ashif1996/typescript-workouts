"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var calculateSimpleInterest = function () {
    var principalAmount = parseFloat(readline_sync_1.default.question("\n" + "Enter the principal amount: "));
    var interestRate = parseFloat(readline_sync_1.default.question("Enter the interest rate: "));
    var numberOfYears = parseFloat(readline_sync_1.default.question("Enter the number of years: "));
    var simpleInterest = (principalAmount * interestRate * numberOfYears) / 100;
    return simpleInterest;
};
var result = calculateSimpleInterest();
console.log("\n" + "The simple interest is ".concat(result, ".") + "\n");
