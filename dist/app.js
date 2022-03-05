"use strict";
const emp1 = {
    name: "Gino",
    privileges: ["create-server"],
    startDate: new Date(),
};
function adding(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("Name " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date " + emp.startDate);
    }
}
printEmployeeInfo(emp1);
printEmployeeInfo({ name: "Alex", startDate: new Date() });
class Car {
    drive() {
        console.log("driving");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("loading cargo... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function userVehicule(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
userVehicule(v1);
userVehicule(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "Bird":
            speed = animal.flyingSpeed;
            break;
        case "Horse":
            speed = animal.runningSpeed;
            break;
        default:
    }
    console.log("moving at speed " + speed);
}
moveAnimal({ type: "Bird", flyingSpeed: 50 });
