// Write an object oriented program to store and display the values of a 2D array.
// Program should contains 3 functions including the main function.

import readlineSync from "readline-sync";

class TwoDArray {
    rows: number;
    columns: number;
    array: number[][];

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.array = [];
    }

    getArray(): void {
        console.log("\n" + "Enter the values of array: ");

        for(let i: number = 0; i < this.rows; i++) {
            let array1: number[] = [];

            for (let j = 0; j < this.columns; j++) {
                let arrayValues = parseInt(readlineSync.question(`Enter value [${i +1}][${j +1}]:`));
                array1.push(arrayValues);
            }

            this.array.push(array1);
        }
    }

    displayArray(): void {
        console.log("\n" + "The values of the array are: " + "\n");

        for(let i: number = 0; i < this.rows; i++) {
            console.log(this.array[i].join(" "));
        }
    }
}

const main = (): void => {
    const numberOfRows: number = parseInt(readlineSync.question("\n" + "Enter the size of the rows: "));
    const numberOfColumns: number = parseInt(readlineSync.question("Enter the size of the columns: "));

    const array = new TwoDArray(numberOfRows, numberOfColumns);

    array.getArray();
    array.displayArray();
};

main();
console.log();