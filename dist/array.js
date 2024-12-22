"use strict";
// Write a program to accept an array and display it on the console using functions
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var getArray = function (size) {
    var array = [];
    for (var i = 1; i <= size; i++) {
        var value = parseFloat(readline_sync_1.default.question("Enter value ".concat(i, ": ")));
        array.push(value);
    }
    return array;
};
var displayArray = function (array) {
    console.log("\n" + "[".concat(array.join(", "), "]") + "\n");
};
var main = function () {
    var size = parseFloat(readline_sync_1.default.question("\n" + "Enter the size of arrays: "));
    console.log("\n" + "Enter the values of array:");
    var array = getArray(size);
    displayArray(array);
};
main();
