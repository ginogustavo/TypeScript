class Department {
  private employees: string[] = [];
  //  private readyonly id:string;
  //  public name: string;
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

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Gino");
accounting.addEmployee("Gustavo");
accounting.describe();
accounting.printEmployeeInfo();
