"use strict";
// Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var calculateGrade = function (mark) {
    var grade;
    if (mark >= 90 && mark <= 100) {
        grade = "A";
    }
    else if (mark >= 80 && mark < 90) {
        grade = "B";
    }
    else if (mark >= 70 && mark < 80) {
        grade = "C";
    }
    else if (mark >= 60 && mark < 70) {
        grade = "D";
    }
    else if (mark >= 50 && mark < 60) {
        grade = "E";
    }
    else if (mark >= 0 && mark < 50) {
        grade = "Failed";
    }
    else {
        grade = "Mark should be between 0 and 100";
    }
    return grade;
};
var showExamGrade = function () {
    var mark = parseFloat(readline_sync_1.default.question("\n" + "Enter your mark: "));
    var grade = calculateGrade(mark);
    return grade;
};
var result = showExamGrade();
console.log("\n" + "Your grade is ".concat(result) + "\n");
