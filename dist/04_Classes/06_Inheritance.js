"use strict";
class Department6 {
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
class ITDepartment6 extends Department6 {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class Accounting6 extends Department6 {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const itdept6 = new ITDepartment("d1", ["Nataly", "Mark"]);
itdept6.addEmployee("Gino");
itdept6.addEmployee("Gustavo");
itdept6.describe();
itdept6.printEmployeeInfo();
console.log(itdept6);
const actDept6 = new Accounting6("d2", []);
actDept6.addReport("Something went wrong...");
actDept6.printReport();
