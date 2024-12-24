"use strict";
// Write a program to multiply the adjacent values of an array and store it in an another array.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var buildArray = function (size) {
    console.log("\n" + "Enter the values of array:");
    var array = [];
    for (var i = 1; i <= size; i++) {
        var value = parseFloat(readline_sync_1.default.question("Enter value ".concat(i, ": ")));
        array.push(value);
    }
    return array;
};
var multiplyAdjacentValues = function (array) {
    var updatedArray = [];
    for (var i = 0; i < array.length - 1; i++) {
        var value = array[i] * array[i + 1];
        updatedArray.push(value);
    }
    return updatedArray;
};
var main = function () {
    var size = parseFloat(readline_sync_1.default.question("\n" + "Enter the size of arrays: "));
    var array = buildArray(size);
    var finalArray = multiplyAdjacentValues(array);
    return finalArray;
};
var result = main();
console.log();
console.log(result, "\n");
