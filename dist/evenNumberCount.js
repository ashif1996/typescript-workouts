"use strict";
// Write a program to find the number of even numbers in an array
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var buildArray = function (size) {
    var array = [];
    for (var i = 1; i <= size; i++) {
        var value = parseFloat(readline_sync_1.default.question("Enter value ".concat(i, ": ")));
        array.push(value);
    }
    return array;
};
var findEvenNumbersCount = function (array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }
    return count;
};
var displayEvenNumbersCount = function () {
    var size = parseFloat(readline_sync_1.default.question("\n" + "Enter the size of arrays: "));
    console.log("\n" + "Enter the values of array:");
    var array = buildArray(size);
    var evenNumbersLength = findEvenNumbersCount(array);
    console.log("\n" + "Number of even numbers is ".concat(evenNumbersLength, ".") + "\n");
};
displayEvenNumbersCount();
