/**
 * Singleton Patern & Private Constructors
 * Ensuring you'll always get only exaclty one instance of a class.
 * Useful when you can't use static methods or properties or don't want to.
 *
 * E.g In the entire company we must have one instance of Account Dept,
 * but we may have several IT depts.
 *
 * Make "private" the constructur of the class
 *
 */
abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    console.log(Department.fiscalYear);
  }
  static fiscalYear = 2023;
  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Dept ID: " + this.id);
  }
}

class AccountingDept extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  //So, new Accounting("d2", []); is not allowed.
  //It's only accessible from inside the class.
  // How do we get instance? Using "static" methods.

  private static instance: AccountingDept;

  static getInstance() {
    //could be either this.instance or AccountingDept.instance
    if (AccountingDept.instance) {
      return this.instance;
    }
    this.instance = new AccountingDept("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Gino") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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

// const actDept = new Accounting("d2", []);
const actDept = AccountingDept.getInstance();
const actDept2 = AccountingDept.getInstance();
console.log(actDept, actDept2);

actDept.mostRecentReport = "Year end report";
actDept.addReport("Something went wrong...");
console.log(actDept.mostRecentReport);
//actDept.printReport();
actDept.addEmployee("Gino");
actDept.addEmployee("Alexander");
// actDept.printEmployeeInfo();

actDept.describe();
