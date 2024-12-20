"use strict";
// Write a program to find the sum of all the odd numbers for a given limit.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var sumOfOddNumbers = function () {
    var limit = parseFloat(readline_sync_1.default.question("\n" + "Enter a limit: "));
    var sum = 0;
    for (var i = 1; i <= limit; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
};
var result = sumOfOddNumbers();
console.log("\n" + "Sum of odd numbers = ".concat(result) + "\n");
