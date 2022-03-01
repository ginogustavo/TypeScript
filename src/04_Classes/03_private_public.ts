class Department3 {
  public name: string;
  private employees: string[] = [];

  // you can also make methods private
  // public is default modifier, accessible from outside.

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department3) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting3 = new Department3("Accounting");
accounting3.addEmployee("Gino");
accounting3.addEmployee("Gustavo");
//accounting.employees[2] = "Naty"; //-> since it's already private it gets an error.
accounting3.describe();
accounting3.printEmployeeInfo();

// const accountingCopy = { name: "hr", describe: accounting.describe };
// accountingCopy.describe();
/**
 * Why make property private and force to use addEmployee(), instead of direct access to property:
 * - keep an order, because your co-workers my add one way and others the other way
 * - addEmployee() may be doing a extra validation, logic, etc you won't wanna miss.
 */
