"use strict";
class Department3 {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting3 = new Department3("Accounting");
accounting3.addEmployee("Gino");
accounting3.addEmployee("Gustavo");
accounting3.describe();
accounting3.printEmployeeInfo();
