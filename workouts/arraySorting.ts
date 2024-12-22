// Write a program to sort an array in descending order

import readlineSync from "readline-sync";

const buildArray = (size: number): number[] => {
    let array: number[] = [];

    for (let i: number = 1; i <= size; i++) {
        let value: number = parseFloat(readlineSync.question(`Enter value ${i}: `));
        array.push(value);
    }

    return array;
};

const sortArrayDescending = (): number[] => {
    const size: number = parseFloat(readlineSync.question("\n"+ "Enter the size of arrays: "));
    
    console.log("\n" + "Enter the values of array:");
    let array: number[] = buildArray(size);

    const sortedArray: number[] = array.sort((a, b) => b - a);
    return sortedArray;
};

const sortedArray = sortArrayDescending();
console.log("\n" + `Sorted array: ${sortedArray}` + "\n");