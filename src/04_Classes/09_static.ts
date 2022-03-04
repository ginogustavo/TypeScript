class Department9 {
  constructor(private readonly id: string, public name: string) {
    // When you set a static, you cannot access from your non-static functions.
    // this.fiscalYear // inaccessible
    //you need to use the name of the class
    console.log(Department9.fiscalYear);
  }

  static fiscalYear = 2023;

  static createEmployee(name: string) {
    return { name: name };
  }
}

const employee9 = Department9.createEmployee("Alex");
console.log(employee9, Department9.fiscalYear);
