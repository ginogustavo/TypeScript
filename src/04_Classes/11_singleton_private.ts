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
abstract class Department11 {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    console.log(Department11.fiscalYear);
  }
  static fiscalYear = 2023;
  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department11): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDept11 extends Department11 {
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

  private static instance: AccountingDept11;

  static getInstance() {
    //could be either this.instance or AccountingDept.instance
    if (AccountingDept11.instance) {
      return this.instance;
    }
    this.instance = new AccountingDept11("d2", []);
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
// const actDept = new Accounting("d2", []);
const actDept11 = AccountingDept11.getInstance();
const actDept112 = AccountingDept11.getInstance();
console.log(actDept11, actDept112); // are pointing the same objects.
