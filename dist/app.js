"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Gino");
textStorage.addItem("Gustavo");
textStorage.removeItem("Gino");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(10);
const objStorage = new DataStorage();
objStorage.addItem({ name: "Gino" });
objStorage.addItem({ name: "Gustavo" });
objStorage.removeItem({ name: "Gino" });
console.log(objStorage.getItems());
const obj1 = { name: "XXX" };
objStorage.addItem(obj1);
objStorage.removeItem(obj1);
console.log(objStorage.getItems());
class DataStorage2 {
}
