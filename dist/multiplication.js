"use strict";
// Write a program to print the multiplication table of given numbers.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var printMultiplicationTable = function () {
    var num = parseFloat(readline_sync_1.default.question("\n" + "Enter a number: "));
    console.log();
    for (var i = 1; i <= 10; i++) {
        var multiplication = i * num;
        console.log("".concat(i, " x ").concat(num, " = ").concat(multiplication));
    }
    console.log();
};
printMultiplicationTable();
