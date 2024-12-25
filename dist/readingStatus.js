"use strict";
// Write a Javascript program to display the status (I.e. display book name, author name & reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties.
var library = [
    {
        title: "Bill Gates",
        author: "The Road Ahead",
        readingStatus: true,
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: true,
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false,
    }
];
var displayBookStatus = function (library) {
    console.log("\n" + "Book status: " + "\n");
    for (var i = 0; i < library.length; i++) {
        var book = library[i];
        if (book.readingStatus) {
            console.log("".concat(i + 1, ". Already read the book ").concat(book.title, " by author ").concat(book.author, "."));
        }
        else {
            console.log("".concat(i + 1, ". You still need to the read book ").concat(book.title, " by ").concat(book.author, ".") + "\n");
        }
    }
};
displayBookStatus(library);
