"use strict";
// Write a program to add to two dimensional arrays.
// Program should accept two 2D arrays and display its sum
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Eg: Output: Enter the size of arrays
// Input: 3
// Output: Enter the values of array 1
// Input: 
// 1 2 3
// 4 5 6
// 7 8 9
// Output: Enter the values of array 2
// Input:
// 10 20 30
// 40 50 60
// 70 80 90
// Output: Sum of 2 arrays is:
// 11 22 33
// 44 55 66
// 77 88 99
var readline_sync_1 = __importDefault(require("readline-sync"));
var buildArrays = function (numberOfRows, numberOfColumns) {
    var array = [];
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            var arrayValue = parseInt(readline_sync_1.default.question("Enter value [".concat(i + 1, "][").concat(j + 1, "]: ")));
            row.push(arrayValue);
        }
        array.push(row);
    }
    return array;
};
var add2DArrayValues = function (array1, array2, numberOfRows, numberOfColumns) {
    var sumArray = [];
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            var arraySumValues = array1[i][j] + array2[i][j];
            row.push(arraySumValues);
        }
        sumArray.push(row);
    }
    return sumArray;
};
var displayArray = function (array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i].join(" "));
    }
};
var main = function () {
    var numberOfRows = parseInt(readline_sync_1.default.question("\n" + "Enter the size of the rows: "));
    var numberOfColumns = parseInt(readline_sync_1.default.question("Enter the size of the columns: "));
    console.log("\n" + "Enter the values of array1:");
    var array1 = buildArrays(numberOfRows, numberOfColumns);
    console.log("\n" + "Enter the values of array2:");
    var array2 = buildArrays(numberOfRows, numberOfColumns);
    console.log("\n" + "Sum of values of Array 1 and Array 2: " + "\n");
    var finalArray = add2DArrayValues(array1, array2, numberOfRows, numberOfColumns);
    displayArray(finalArray);
    console.log();
};
main();
