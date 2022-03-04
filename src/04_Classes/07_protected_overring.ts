class Department7 {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

  describe(this: Department7) {
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
class ITDepartment7 extends Department7 {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class Accounting7 extends Department7 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  //we can override methods
  addEmployee(name: string) {
    if (name === "Gino") {
      return;
    }

    //this.employees was private, sub-class doesn't have access to the private parent's property
    //Switching to protected modifier: in the Parent class:
    this.employees.push(name);

    // PRIVATE: makes property available only in the class
    // PROTECTED: not only in the class, but also in the children (class that extends that class)
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  printReport() {
    console.log(this.reports);
  }
}

const itdept7 = new ITDepartment7("d1", ["Nataly", "Mark"]);
itdept7.addEmployee("Gino");
itdept7.addEmployee("Gustavo");
itdept7.describe();
itdept7.printEmployeeInfo();
console.log(itdept7);

const actDept7 = new Accounting7("d2", []);
actDept7.addReport("Something went wrong...");
actDept7.printReport();
actDept7.addEmployee("Gino");
actDept7.addEmployee("Alexander");
actDept7.printEmployeeInfo();
