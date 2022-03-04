"use strict";
class Department7 {
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
class ITDepartment7 extends Department7 {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class Accounting7 extends Department7 {
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
const itdept7 = new ITDepartment7("d1", ["Nataly", "Mark"]);
itdept7.addEmployee("Gino");
itdept7.addEmployee("Gustavo");
itdept7.describe();
itdept7.printEmployeeInfo();
console.log(itdept7);
const actDept7 = new Accounting7("d2", []);
actDept7.addReport("Something went wrong...");
actDept7.printReport();
actDept7.addEmployee("Gino");
actDept7.addEmployee("Alexander");
actDept7.printEmployeeInfo();
