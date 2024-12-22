// Write a program to check whether a given number is prime or not

import readlineSync from "readline-sync";

const checkPrime = (): boolean => {
    const num: number = parseFloat(readlineSync.question("\n"+ "Enter a number: "));

    if (num <= 1) {
        return false;
    }
    
    for (let i: number = 2; i * i <= num; i++) {
        if (num % i === 0 ) {
            return false;
        }
    }

    return true;
};

const displayPrime = (): string => {
    const primeResult: boolean = checkPrime();
    return primeResult
        ? "Entered number is a Prime number."
        : "Entered number is not a Prime number.";
};

const str: string = displayPrime();
console.log("\n" + str + "\n");