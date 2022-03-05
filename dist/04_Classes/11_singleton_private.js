"use strict";
class Department11 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department11.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department11.fiscalYear = 2023;
class AccountingDept11 extends Department11 {
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
    static getInstance() {
        if (AccountingDept11.instance) {
            return this.instance;
        }
        this.instance = new AccountingDept11("d2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department - ID " + this.id);
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
const actDept11 = AccountingDept11.getInstance();
const actDept112 = AccountingDept11.getInstance();
console.log(actDept11, actDept112);
