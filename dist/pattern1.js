"use strict";
// Write a program to print the following pattern (hint: use nested loop).
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
var printGivenPattern = function () {
    console.log();
    for (var i = 1; i <= 5; i++) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
    console.log();
};
printGivenPattern();
