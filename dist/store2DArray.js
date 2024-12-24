"use strict";
// Write an object oriented program to store and display the values of a 2D array.
// Program should contains 3 functions including the main function.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var TwoDArray = /** @class */ (function () {
    function TwoDArray(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.array = [];
    }
    TwoDArray.prototype.getArray = function () {
        console.log("\n" + "Enter the values of array: ");
        for (var i = 0; i < this.rows; i++) {
            var array1 = [];
            for (var j = 0; j < this.columns; j++) {
                var arrayValues = parseInt(readline_sync_1.default.question("Enter value [".concat(i + 1, "][").concat(j + 1, "]:")));
                array1.push(arrayValues);
            }
            this.array.push(array1);
        }
    };
    TwoDArray.prototype.displayArray = function () {
        console.log("\n" + "The values of the array are: " + "\n");
        for (var i = 0; i < this.rows; i++) {
            console.log(this.array[i].join(" "));
        }
    };
    return TwoDArray;
}());
var main = function () {
    var numberOfRows = parseInt(readline_sync_1.default.question("\n" + "Enter the size of the rows: "));
    var numberOfColumns = parseInt(readline_sync_1.default.question("Enter the size of the columns: "));
    var array = new TwoDArray(numberOfRows, numberOfColumns);
    array.getArray();
    array.displayArray();
};
main();
console.log();
