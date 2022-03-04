"use strict";
class Department10 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department10.fiscalYear = 2023;
class ITDepartment10 extends Department10 {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Dept ID: " + this.id);
    }
}
class Accounting10 extends Department10 {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    describe() {
        console.log("Accounting Department - ID " + this.id);
    }
}
const itdept10 = new ITDepartment10("d1", ["Nataly", "Mark"]);
itdept10.describe();
const actDept10 = new Accounting10("d2", []);
actDept10.describe();
