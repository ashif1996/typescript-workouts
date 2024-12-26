"use strict";
// Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var catchAndDisplayError = function () {
    var input = readline_sync_1.default.question("\n" + "Enter a word: ");
    var myString = isNaN(Number(input)) ? input : Number(input);
    try {
        var reversed = myString.split("").reverse().join("");
        console.log("\nReversed string is ".concat(reversed, "."));
    }
    catch (error) {
        console.log("\nError occurred: ".concat(error.message));
    }
    finally {
        console.log("\nThe type of myString is ".concat(typeof myString, ".\n"));
    }
};
catchAndDisplayError();
