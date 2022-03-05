interface Greetable1 {
  name: string;
  greet(phrase: string): void;
}
/**
 * Isn't it same as ? 
 * type Person = {
    name: string;
    age: number;
    greet(phrase: string): void;
}
Interface and custom Type are not exactly the same. Often you can use them interchangeably.
Difference: 
- Interface can only be used to describe the sctructure of an object. Type as well, but
insider a Custom Types you can store other things, like Union types and so on.
-Interface is clearer -> you want to define an object.
-You can implement an Interface in a class
-Unlike classes, You can implement more than one interface.
-You can use an interface as a type on some variable, which then it actually store another class
which is based on the interface.
 */

class Person01 implements Greetable1 {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name} `);
  }
}

let user_1: Greetable1;
user_1 = new Person01("Gino");
user_1.greet("Hi there.");
console.log(user_1);
