"use strict";
class Department {
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Gino") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const itdept = new ITDepartment("d1", ["Nataly", "Mark"]);
itdept.addEmployee("Gino");
itdept.addEmployee("Gustavo");
itdept.describe();
itdept.printEmployeeInfo();
console.log(itdept);
const actDept = new Accounting("d2", []);
actDept.addReport("Something went wrong...");
actDept.printReport();
actDept.addEmployee("Gino");
actDept.addEmployee("Alexander");
actDept.printEmployeeInfo();
