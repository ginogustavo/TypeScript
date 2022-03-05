/**
 * You cannot add modifiers public private, etc
 * You can add the readonly: Means this property, in objects you based on this
 * interface, must only be set once and is readonly thereafter. I can't be changed
 * after the object has been initialized.
 *
 * Custom Type also can do this, but is more common to use Interface.
  type Greetable {
    readonly name: string;
  }
 *
 */
interface Greetable52 {
  readonly name: string;
  greet(phrase: string): void;
}
// The class implementing does not specify readonly
class Person52 implements Greetable52 {
  name: string; // <--
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name} `);
  }
}

let user52: Greetable52;
user52 = new Person52("Gino");
//user1.name = "Gustavo"  // <--  but I cannot assign it again
user52.greet("Hi there.");
console.log(user52);
