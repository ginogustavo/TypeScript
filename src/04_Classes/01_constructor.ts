class Department0 {
  //name: string = ''; you also can assign a default
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}
/**
 * Classes are sugar sintax for constructor functions, but we'll see that
 * after compiled.
 *
 * Constructor:
 * - Associated not only to the class but to any object created on this class
 * - Associated when the objects is cretaed (initialization work)
 *
 */

const accounting0 = new Department0("Accounting");
console.log(accounting0);
