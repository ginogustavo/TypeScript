"use strict";
class Department4 {
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
const accounting4 = new Department4("d1", "Accounting");
accounting4.addEmployee("Gino");
accounting4.addEmployee("Gustavo");
accounting4.describe();
accounting4.printEmployeeInfo();
