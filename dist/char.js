"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var displayCharInput = function () {
    var char = readline_sync_1.default.question("\n" + "Enter your name: ");
    return char;
};
var name = displayCharInput();
console.log("\n" + "Welcome ".concat(name) + "\n");
