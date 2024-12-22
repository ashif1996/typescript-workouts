"use strict";
// Write a program to interchange the values of two arrays.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var buildArrays = function (size) {
    var array = [];
    for (var i = 1; i <= size; i++) {
        var value = parseFloat(readline_sync_1.default.question("Enter value ".concat(i, ": ")));
        array.push(value);
    }
    return array;
};
var swapArrayValues = function () {
    var _a;
    var size = parseFloat(readline_sync_1.default.question("\n" + "Enter the size of arrays: "));
    console.log("\n" + "Enter the values of array1:");
    var array1 = buildArrays(size);
    console.log("\n" + "Enter the values of array2:");
    var array2 = buildArrays(size);
    _a = [array2, array1], array1 = _a[0], array2 = _a[1];
    console.log("\n" + "Arrays after swapping:" + "\n");
    console.log("Array1:", array1.join(", "));
    console.log("Array2:", array2.join(", "));
    console.log();
};
swapArrayValues();
