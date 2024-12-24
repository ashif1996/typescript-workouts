// Write a program to multiply the adjacent values of an array and store it in an another array.

import readlineSync from "readline-sync";

const buildArray = (size: number): number[] => {
    console.log("\n" + "Enter the values of array:");
    let array: number[] = [];
    
        for (let i: number = 1; i <= size; i++) {
            let value: number = parseFloat(readlineSync.question(`Enter value ${i}: `));
            array.push(value);
        }
    
        return array;
};

const multiplyAdjacentValues = (array: number[]): number[] => {
    let updatedArray: number[] = [];

    for (let i: number = 0; i < array.length - 1; i++) {
        let value = array[i] * array[i + 1];
        updatedArray.push(value);
    }

    return updatedArray;
};

const main = (): number[] => {
    const size: number = parseFloat(readlineSync.question("\n"+ "Enter the size of arrays: "));

    const array: number[] = buildArray(size);
    const finalArray: number[] = multiplyAdjacentValues(array);

    return finalArray;
};

const result = main();
console.log();
console.log(result, "\n");