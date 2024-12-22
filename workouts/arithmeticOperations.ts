// Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)

import readlineSync from "readline-sync";

class Calculator {
    addition (num1: number, num2: number): number {
        return num1 + num2;
    }

    subtraction (num1: number, num2: number): number {
        return num1 - num2;
    }

    multiplication (num1: number, num2: number): number {
        return num1 * num2;
    }

    division (num1: number, num2: number): number {
        if (num2 === 0) {
            console.log("\n" + "Division by zero is not allowed.");
            return NaN;
        }

        return num1 / num2;
    }
};

const displayMenu = (): void => {
    console.log();
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
};

const getNumbers = (): { num1: number, num2: number } => {
    const num1: number = parseInt(readlineSync.question("\n" + "Enter the first number: "));
    const num2: number = parseInt(readlineSync.question("Enter the second number: "));

    return { num1, num2 };
};

const main = (): void => {
    const calculator = new Calculator();

    displayMenu();

    let exit: boolean = false;
    while (!exit) {
        const choice: number = parseInt(readlineSync.question("\n" + "Enter your choice(1-5): "));

        switch (choice) {
            case 1: {
                const { num1, num2 } = getNumbers();
                const result: number = calculator.addition(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 2: {
                const { num1, num2 } = getNumbers();
                const result: number = calculator.subtraction(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 3: {
                const { num1, num2 } = getNumbers();
                const result: number = calculator.multiplication(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 4: {
                const { num1, num2 } = getNumbers();
                const result: number = calculator.division(num1, num2);
                console.log("\n" + "Result:", result);
                break;
            }
            case 5:
                console.log("\n" + "Exiting the program." + "\n");
                exit = true;
                break;
            default:
                console.log("\n" + "Invalid entry. Please try again.");
        }
    }
};

main();