"use strict";
class Department8 {
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
class Accounting8 extends Department8 {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "Gino") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const actDept8 = new Accounting8("d2", []);
actDept8.mostRecentReport = "Year end report";
actDept8.addReport("Something went wrong...");
console.log(actDept8.mostRecentReport);
actDept8.printReport();
actDept8.addEmployee("Gino");
actDept8.addEmployee("Alexander");
actDept8.printEmployeeInfo();
