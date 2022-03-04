class Department5 {
  private employees: string[] = [];
  //  private readyonly id:string;
  //  public name: string;
  constructor(private readonly id: string, public name: string) {}

  describe(this: Department5) {
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

const accounting5 = new Department5("d1", "Accounting");
accounting5.addEmployee("Gino");
accounting5.addEmployee("Gustavo");
accounting5.describe();
accounting5.printEmployeeInfo();
