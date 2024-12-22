"use strict";
// Write a program to identify whether a string is a palindrome or not
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var checkPalindromeString = function () {
    var str = readline_sync_1.default.question("\n" + "Enter a string: ");
    var reversed = str.split("").reverse().join("").toLowerCase();
    return str.toLowerCase() === reversed
        ? "".concat(str, " is a palindrome.")
        : "".concat(str, " is not a palindrome.");
};
var result = checkPalindromeString();
console.log("\n" + "".concat(result) + "\n");
