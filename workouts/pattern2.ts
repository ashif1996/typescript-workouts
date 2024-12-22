// Write a program to print the following pattern using for loop.
// 1
// 2  3
// 4  5	 6
// 7  8	 9  10

const printPattern = (): void => {
    let num: number = 1;

    for (let i: number = 0; i < 4; i++) {
        let str: string = "";
        for (let j: number = 0; j <= i; j++) {
            str += num++ + " ";
        }
        console.log(str + "\n");
    }
};

printPattern();