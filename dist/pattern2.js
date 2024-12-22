"use strict";
// Write a program to print the following pattern using for loop.
// 1
// 2  3
// 4  5	 6
// 7  8	 9  10
var printPattern = function () {
    var num = 1;
    for (var i = 0; i < 4; i++) {
        var str = "";
        for (var j = 0; j <= i; j++) {
            str += num++ + " ";
        }
        console.log(str + "\n");
    }
};
printPattern();
