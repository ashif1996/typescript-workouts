"use strict";
// Write a menu driven program to calculate the area of a given object.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.circle = function (radius) {
        return Math.PI * radius * radius;
    };
    Area.prototype.square = function (side) {
        return side * side;
    };
    Area.prototype.rectangle = function (length, width) {
        return length * width;
    };
    Area.prototype.triangle = function (base, height) {
        return 0.5 * base * height;
    };
    return Area;
}());
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyClass.prototype.main = function () {
        var choice;
        do {
            console.log("\n" + "1. Circle" +
                "\n" + "2. Square" +
                "\n" + "3. Rectangle" +
                "\n" + "4. Triangle" +
                "\n" + "5. Exit");
            choice = parseInt(readline_sync_1.default.question("\n" + "Enter your choice (1-5): "));
            switch (choice) {
                case 1:
                    this.circleArea();
                    break;
                case 2:
                    this.squareArea();
                    break;
                case 3:
                    this.rectangleArea();
                    break;
                case 4:
                    this.triangleArea();
                    break;
                case 5:
                    console.log("\n" + "Exiting program" + "\n");
                    break;
                default:
                    console.log("\n" + "Invalid choice. Please try again.");
            }
        } while (choice !== 5);
    };
    MyClass.prototype.circleArea = function () {
        var radius = parseFloat(readline_sync_1.default.question("\n" + "Enter the radius of the circle: "));
        var area = this.circle(radius);
        console.log("\nArea of the circle: ".concat(area.toFixed(2), "\n"));
    };
    MyClass.prototype.squareArea = function () {
        var side = parseFloat(readline_sync_1.default.question("\nEnter the side of the square: "));
        var area = this.square(side);
        console.log("\nArea of the square: ".concat(area.toFixed(2), "\n"));
    };
    MyClass.prototype.rectangleArea = function () {
        var length = parseFloat(readline_sync_1.default.question("\nEnter the length of the rectangle: "));
        var width = parseFloat(readline_sync_1.default.question("Enter the width of the rectangle: "));
        var area = this.rectangle(length, width);
        console.log("\nArea of the rectangle: ".concat(area.toFixed(2), "\n"));
    };
    MyClass.prototype.triangleArea = function () {
        var base = parseFloat(readline_sync_1.default.question("\nEnter the base of the triangle: "));
        var height = parseFloat(readline_sync_1.default.question("Enter the height of the triangle: "));
        var area = this.triangle(base, height);
        console.log("\nArea of the triangle: ".concat(area.toFixed(2), "\n"));
    };
    return MyClass;
}(Area));
var myObject = new MyClass();
myObject.main();
