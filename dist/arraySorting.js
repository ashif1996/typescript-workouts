"use strict";
// Write a program to sort an array in descending order
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
var sortArrayDescending = function () {
    var size = parseFloat(readline_sync_1.default.question("\n" + "Enter the size of arrays: "));
    console.log("\n" + "Enter the values of array:");
    var array = buildArray(size);
    var sortedArray = array.sort(function (a, b) { return b - a; });
    return sortedArray;
};
var sortedArray = sortArrayDescending();
console.log("\n" + "Sorted array: ".concat(sortedArray) + "\n");
