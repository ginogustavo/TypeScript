class Department1 {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  //   describe() {
  //     console.log("Department description: " + this.name);
  //   }
  /**
   * Workaround: "this" is a instruction, not really an expected parameter
   * It's a hint about what "this" should be refer to.
   * The type should be the class, to indicate "this" should always refer to an
   * instance that's based on the Department class
   */
  describe(this: Department1) {
    console.log("Department: " + this.name);
  }
}

const accounting1 = new Department1("Accounting");
console.log(accounting1);
accounting1.describe();

const accountingCopya = { describe: accounting1.describe };
//accountingCopy.describe(); // this.name was not defined, thus = undefined
// When we enforce type in consturctor, here error bc "this" does not refere
// an object of type Department

const accountingCopy2a = { name: "hr", describe: accounting1.describe };
accountingCopy2a.describe();
