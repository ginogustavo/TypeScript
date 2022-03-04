class Department4 {
  private employees: string[] = [];

  //Access modifier in fron of the parameter: instructs TS that you want to not just
  // get these arguments here in the constructur, but you want to create properties
  // for this class with the exact same names.
  constructor(private id: string, public name: string) {}

  //It's shortcut of the double initialization:
  //  private id:string;
  //  public name: string;
  //    constructor(id: string, name: string) {
  //      this.id = id;
  //      this.name = name;

  describe(this: Department4) {
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

const accounting4 = new Department4("d1", "Accounting");
accounting4.addEmployee("Gino");
accounting4.addEmployee("Gustavo");
accounting4.describe();
accounting4.printEmployeeInfo();
