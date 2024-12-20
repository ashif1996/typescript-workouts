"use strict";
// Accept two inputs from the user and output their sum.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var displaySum = function () {
    var num1 = parseFloat(readline_sync_1.default.question("\n" + "Enter the first number: "));
    var num2 = parseFloat(readline_sync_1.default.question("Enter the first number: "));
    var sum = num1 + num2;
    return sum;
};
var result = displaySum();
console.log("\n" + "The sum is ".concat(result, ".") + "\n");
