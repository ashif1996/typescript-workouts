// Accept two inputs from the user and output their sum.

import readlineSync from "readline-sync";

const displaySum = (): number => {
    const num1: number = parseFloat(readlineSync.question("\n"+ "Enter the first number: "));
    const num2: number = parseFloat(readlineSync.question("Enter the first number: "));

    const sum: number = num1 + num2;
    return sum;
};

const result = displaySum();
console.log("\n" + `The sum is ${result}.` + "\n");