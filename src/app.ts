class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // When you set a static, you cannot access from your non-static functions.
    // this.fiscalYear // inaccessible

    //you need to use the name of the class
    console.log(Department.fiscalYear);
  }

  static fiscalYear = 2023;

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }
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
}

class Accounting extends Department {
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

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

const actDept = new Accounting("d2", []);
actDept.mostRecentReport = "Year end report";
actDept.addReport("Something went wrong...");
console.log(actDept.mostRecentReport);
actDept.printReport();
actDept.addEmployee("Gino");
actDept.addEmployee("Alexander");
actDept.printEmployeeInfo();
