"use strict";
// Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var getDayName = function (num) {
    var day;
    switch (num) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid entry";
            break;
    }
    return day;
};
var showDayName = function () {
    var num = parseFloat(readline_sync_1.default.question("\n" + "Enter a number(1 - 7): "));
    var day = getDayName(num);
    return day;
};
var selectedDay = showDayName();
console.log("\n" + "".concat(selectedDay) + "\n");
