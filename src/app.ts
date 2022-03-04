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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
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
actDept.addReport("Something went wrong...");
actDept.printReport();
actDept.addEmployee("Gino");
actDept.addEmployee("Alexander");
actDept.printEmployeeInfo();
