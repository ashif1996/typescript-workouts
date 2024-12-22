"use strict";
// Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.
// If Arun has a score of:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Written test = 81
// Lab exams = 68
// Assignments = 92
// Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5
// Write a program to find the grade of a student during his academic year. 
var readline_sync_1 = __importDefault(require("readline-sync"));
var findOverallGrade = function () {
    console.log("\n" + "Enter the marks obtained for each subjects:" + "\n");
    var writtenTest = parseFloat(readline_sync_1.default.question("Written test = "));
    var labExams = parseFloat(readline_sync_1.default.question("Lab exams = "));
    var assignments = parseFloat(readline_sync_1.default.question("Assignments = "));
    var overallGrade = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
    return overallGrade;
};
var result = findOverallGrade();
console.log("\n" + "Your overall grade is", result + "\n");
