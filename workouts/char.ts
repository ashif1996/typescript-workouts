import readlineSync from "readline-sync";

const char: string = readlineSync.question("\nEnter your name: ");
console.log("\n" + "Welcome", char + "\n");