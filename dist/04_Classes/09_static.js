"use strict";
class Department9 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(Department9.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department9.fiscalYear = 2023;
const employee9 = Department9.createEmployee("Alex");
console.log(employee9, Department9.fiscalYear);
