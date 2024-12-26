"use strict";
// Given a variable named my_height, you must throw errors under the following conditions:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// notANumberError- When my_height is NaN
// HugeHeightError – When my_height is greater than
// TinyHeightError - When my_heightis less than
var readline_sync_1 = __importDefault(require("readline-sync"));
var displayHeightAndError = function () {
    var input = readline_sync_1.default.question("\nEnter your height: ");
    var height = Number(input);
    try {
        if (isNaN(height)) {
            throw new Error("notANumberError: Height must be a valid number.");
        }
        if (height > 50) {
            throw new Error("HugeHeightError: Height is too large.");
        }
        if (height <= 0) {
            throw new Error("TinyHeightError: Height must be greater than 0.");
        }
        console.log("\nHeight is ".concat(height, ".\n"));
    }
    catch (error) {
        console.log("\nError: ".concat(error.message, "\n"));
    }
};
displayHeightAndError();
