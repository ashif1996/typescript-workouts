// Accept a char input from the user and display it on the console.

import readlineSync from "readline-sync";

const displayCharInput = (): string => {
    const char: string = readlineSync.question("\n" + "Enter your name: ");
    return char;
};

const name = displayCharInput();
console.log("\n" + `Welcome ${name}` + "\n");