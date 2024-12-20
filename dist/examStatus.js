"use strict";
// Write a program to check whether a student has passed or failed in a subject after he or she enters their mark (pass mark for a subject is 50 out of 100).
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var checkExamResultStatus = function () {
    var mark = parseFloat(readline_sync_1.default.question("\n" + "Enter your mark: "));
    var result = mark >= 50 ? "Passed" : "Failed";
    return result;
};
var examStatus = checkExamResultStatus();
console.log("\n" + "".concat(examStatus) + "\n");
