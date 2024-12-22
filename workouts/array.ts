// Write a program to accept an array and display it on the console using functions

import readlineSync from "readline-sync";

const getArray = (size: number): number[] => {
    let array: number[] = [];
    
    for (let i: number = 1; i <= size; i++) {
        let value: number = parseFloat(readlineSync.question(`Enter value ${i}: `));
        array.push(value);
    }

    return array;
};

const displayArray = (array: number[]): void => {
    console.log("\n" + `[${array.join(", ")}]` + "\n");
};

const main = (): void => {
    const size: number = parseFloat(readlineSync.question("\n"+ "Enter the size of arrays: "));
        
    console.log("\n" + "Enter the values of array:");
    const array: number[] = getArray(size);

    displayArray(array);
};

main();