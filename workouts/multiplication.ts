// Write a program to print the multiplication table of given numbers.

import readlineSync from "readline-sync";

const printMultiplicationTable = (): void => {
    const num: number = parseFloat(readlineSync.question("\n"+ "Enter a number: "));
    console.log();
    
    for (let i: number = 1; i <= 10; i++) {
        const multiplication: number = i * num;
        console.log(`${i} x ${num} = ${multiplication}`);
    }

    console.log();
};

printMultiplicationTable();