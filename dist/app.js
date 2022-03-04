"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
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
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Dept ID: " + this.id);
    }
}
class AccountingDept extends Department {
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
        if (AccountingDept.instance) {
            return this.instance;
        }
        this.instance = new AccountingDept("d2", []);
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
const employee1 = Department.createEmployee("Alex");
console.log(employee1, Department.fiscalYear);
const itdept = new ITDepartment("d1", ["Nataly", "Mark"]);
itdept.addEmployee("Gino");
itdept.addEmployee("Gustavo");
itdept.describe();
itdept.printEmployeeInfo();
console.log(itdept);
const actDept = AccountingDept.getInstance();
const actDept2 = AccountingDept.getInstance();
console.log(actDept, actDept2);
actDept.mostRecentReport = "Year end report";
actDept.addReport("Something went wrong...");
console.log(actDept.mostRecentReport);
actDept.addEmployee("Gino");
actDept.addEmployee("Alexander");
actDept.describe();
