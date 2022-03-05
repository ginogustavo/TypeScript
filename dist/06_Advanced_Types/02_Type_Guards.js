"use strict";
const emp62 = {
    name: "Gino",
    privileges: ["create-server"],
    startDate: new Date(),
};
function adding62(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo62(emp) {
    console.log("Name " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date " + emp.startDate);
    }
}
printEmployeeInfo62(emp62);
printEmployeeInfo62({ name: "Alex", startDate: new Date() });
class Car62 {
    drive() {
        console.log("driving");
    }
}
class Truck62 {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("loading cargo... " + amount);
    }
}
const v62_1 = new Car62();
const v62_2 = new Truck62();
function userVehicule62(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck62) {
        vehicle.loadCargo(1000);
    }
}
userVehicule62(v62_1);
userVehicule62(v62_2);
