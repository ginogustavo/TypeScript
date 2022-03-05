/**
 * Interfaces:
 * We can use it to describe how an object should look like.
 * We can use it to Type-Check an object
 *
 */
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user01: Person; // We can use our interfaces as type

//when assign, it has to be an object with type
// Person (with name property, age number) and greet method

user01 = {
  name: "Luke",
  age: 25,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name} `);
  },
};

user01.greet("Hi there.");
