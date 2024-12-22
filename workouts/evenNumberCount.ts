// Write a program to find the number of even numbers in an array

import readlineSync from "readline-sync";

const buildArray = (size: number): number[] => {
    let array: number[] = [];

    for (let i: number = 1; i <= size; i++) {
        let value: number = parseFloat(readlineSync.question(`Enter value ${i}: `));
        array.push(value);
    }

    return array;
};

const findEvenNumbersCount = (array: number[]): number => {
    let count: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }

    return count;
};

const displayEvenNumbersCount = () => {
    const size: number = parseFloat(readlineSync.question("\n"+ "Enter the size of arrays: "));

    console.log("\n" + "Enter the values of array:");
    let array: number[] = buildArray(size);

    const evenNumbersLength: number = findEvenNumbersCount(array);
    console.log("\n" + `Number of even numbers is ${evenNumbersLength}.` + "\n");
};

displayEvenNumbersCount();