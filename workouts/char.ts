import readlineSync from "readline-sync";

const displayCharInput = (): string => {
    const char: string = readlineSync.question("\n" + "Enter your name: ");
    return char;
};

const name = displayCharInput();
console.log("\n" + `Welcome ${name}` + "\n");