class Department8 {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

  describe(this: Department8) {
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

class Accounting8 extends Department8 {
  private lastReport: string;

  //getter method
  get mostRecentReport() {
    // we are encapsulating bc it's publicly accessible.
    //you may want more complex logic here
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

  //we can override methods
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

const actDept8 = new Accounting8("d2", []);

//Run setter
actDept8.mostRecentReport = "Year end report";

actDept8.addReport("Something went wrong...");
//you access like a normal property.
console.log(actDept8.mostRecentReport);
actDept8.printReport();
actDept8.addEmployee("Gino");
actDept8.addEmployee("Alexander");
actDept8.printEmployeeInfo();
