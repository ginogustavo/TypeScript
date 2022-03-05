/**
 * Abstract classes cannot be instaciated themselves
 *  you cannot have ... new Department() anymore.
 *  The class can only be instantiated from, so the inheriting classes are forced to
 *  provide concrete implementation.
 */

abstract class Department10 {
  protected employees: string[] = [];

  //you can also have abstract properties
  //abstract employees2: string[];

  constructor(protected readonly id: string, public name: string) {
    console.log(Department10.fiscalYear);
  }
  static fiscalYear = 2023;
  static createEmployee(name: string) {
    return { name: name };
  }
  //Force devs to implement the method with Abastract.
  //use case: when you want to ensure that each subClass needs to provide their own implemenation

  // describe(this: Department) {
  //   console.log(`Department: (${this.id}): ${this.name}`);
  // }

  abstract describe(this: Department10): void;
  // 1. Made this class abstract
  // 2. Added abstract method
  // 3. no body and specify return type.

  // This doesn't tell anythin about behaviour other than the structure.
  // with this keyword referring to a Department instance or instance somehow based on Department
}
class ITDepartment10 extends Department10 {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Dept ID: " + this.id);
  }

  //
}

class Accounting10 extends Department10 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe() {
    console.log("Accounting Department - ID " + this.id);
  }
}

const itdept10 = new ITDepartment10("d1", ["Nataly", "Mark"]);
itdept10.describe();

const actDept10 = new Accounting10("d2", []);
actDept10.describe();
