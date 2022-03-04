class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

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

const itdept = new ITDepartment("d1", ["Nataly", "Mark"]);
itdept.addEmployee("Gino");
itdept.addEmployee("Gustavo");
itdept.describe();
itdept.printEmployeeInfo();
console.log(itdept);

const actDept = new Accounting("d2", []);

//Run setter
actDept.mostRecentReport = "Year end report";

actDept.addReport("Something went wrong...");
//you access like a normal property.
console.log(actDept.mostRecentReport);
actDept.printReport();
actDept.addEmployee("Gino");
actDept.addEmployee("Alexander");
actDept.printEmployeeInfo();
