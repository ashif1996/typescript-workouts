// Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console.

import readlineSync from "readline-sync";

const catchAndDisplayError = (): void => {
    const input: any = readlineSync.question("\n" + "Enter a word: ");
    let myString: any = isNaN(Number(input)) ? input : Number(input);

    try {
        const reversed: string = myString.split("").reverse().join("");
        console.log(`\nReversed string is ${reversed}.`);
    } catch (error) {
        console.log(`\nError occurred: ${(error as Error).message}`);
    } finally {
        console.log(`\nThe type of myString is ${typeof myString}.\n`);
    }
};

catchAndDisplayError();