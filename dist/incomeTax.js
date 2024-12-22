"use strict";
// Write a program to find out the income tax amount of a person.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var calculateIncomeTax = function (income) {
    var incomeTax;
    if (income > 0 && income <= 250000) {
        incomeTax = 0;
        return incomeTax;
    }
    else if (income > 250000 && income <= 500000) {
        incomeTax = (income - 250000) * 0.05;
        return incomeTax;
    }
    else if (income > 500000 && income <= 1000000) {
        incomeTax = (income - 500000) * 0.20 + (500000 - 250000) * 0.05;
        return incomeTax;
    }
    else if (income > 1000000 && income <= 5000000) {
        incomeTax = (income - 1000000) * 0.30 + (1000000 - 500000) * 0.20 + (500000 - 250000) * 0.05;
        return incomeTax;
    }
    else if (income > 5000000) {
        console.log("\n" + "Annual income is above 50 lakh. Please consult an expert for tax calculation." + "\n");
        return NaN;
    }
    else if (income <= 0) {
        console.log("\n" + "Invalid entry." + "\n");
        return NaN;
    }
    return NaN;
};
var displayIncomeTax = function () {
    var income = parseFloat(readline_sync_1.default.question("\n" + "Enter the annual income: "));
    var incomeTax = calculateIncomeTax(income);
    return incomeTax;
};
var result = displayIncomeTax();
if (!isNaN(result)) {
    console.log("\n" + "Income tax amount is", result + "\n");
}
