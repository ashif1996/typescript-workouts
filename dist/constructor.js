"use strict";
// Create a constructor function that satisfies the following conditions:
var Car = /** @class */ (function () {
    function Car(name, mileage, maxSpeed) {
        this.name = name;
        this.mileage = mileage;
        this.maxSpeed = maxSpeed;
    }
    return Car;
}());
var car = new Car("Bugatti", 10, 250);
console.log("\n", car, "\n");
