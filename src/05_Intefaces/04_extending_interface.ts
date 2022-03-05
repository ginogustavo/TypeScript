interface Named54 {
  readonly name: string;
}
// We could have: class Person implements Greetable, Named
// or make the interfaces extends it

interface Greetable54 extends Named54 {
  greet(phrase: string): void;
}

class Person54 implements Greetable54 {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name} `);
  }
}

let user54: Greetable54;
user54 = new Person54("Gino");
user54.greet("Hi there.");

console.log(user54);
