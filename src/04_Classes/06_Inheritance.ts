class Department6 {
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

  describe(this: Department6) {
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
//You can only inherit from one class.
//when you add your own constructur, you have to call the super(parent's constructor)
// you can forward the id and the names if fixed for this sub-class
class ITDepartment6 extends Department6 {
  // we can do this, but to show the super-this relation
  //constructor(id: string, public admins: string[]) {

  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    // * You have to call "super" first before anything you have to do with "this"
    this.admins = admins;
  }
}
//the class inherit all methods including the constructors
// we can add our own constructor

class Accounting6 extends Department6 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

const itdept6 = new ITDepartment("d1", ["Nataly", "Mark"]);
itdept6.addEmployee("Gino");
itdept6.addEmployee("Gustavo");
itdept6.describe();
itdept6.printEmployeeInfo();
console.log(itdept6);

const actDept6 = new Accounting6("d2", []);
actDept6.addReport("Something went wrong...");
actDept6.printReport();
