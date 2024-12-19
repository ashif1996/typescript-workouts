import readlineSync from "readline-sync";

const char: string = readlineSync.question("\n" + "Enter your name: ");
console.log("\n" + "Welcome", char + "\n");