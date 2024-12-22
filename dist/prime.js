"use strict";
// Write a program to check whether a given number is prime or not
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var checkPrime = function () {
    var num = parseFloat(readline_sync_1.default.question("\n" + "Enter a number: "));
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
var displayPrime = function () {
    var primeResult = checkPrime();
    return primeResult
        ? "Entered number is a Prime number."
        : "Entered number is not a Prime number.";
};
var str = displayPrime();
console.log("\n" + str + "\n");
