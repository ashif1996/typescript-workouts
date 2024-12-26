"use strict";
// Write a myFilter function that takes 2 parameters: myArray and callback. Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as its parameter and returns a boolean true if the sum of the number is even or   false if the sum of the number  is odd.
var calculateSumAndSendBooleanResponse = function (array) {
    var sum = array.reduce(function (accumulator, current) { return accumulator + current; }, 0);
    return sum % 2 === 0 ? true : false;
};
var myArray = [2, 4, 6, 8];
var myFilter = function (array, callback) {
    var response = callback(array);
    return response;
};
var result = myFilter(myArray, calculateSumAndSendBooleanResponse);
console.log();
console.log(result, "\n");
