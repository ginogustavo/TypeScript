"use strict";
class Department1 {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting1 = new Department1("Accounting");
console.log(accounting1);
accounting1.describe();
const accountingCopya = { describe: accounting1.describe };
const accountingCopy2a = { name: "hr", describe: accounting1.describe };
accountingCopy2a.describe();
