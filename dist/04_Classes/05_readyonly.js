"use strict";
class Department5 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting5 = new Department5("d1", "Accounting");
accounting5.addEmployee("Gino");
accounting5.addEmployee("Gustavo");
accounting5.describe();
accounting5.printEmployeeInfo();
