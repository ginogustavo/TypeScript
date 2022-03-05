/**
 * Optinal parameters & properties (In interfaces and also in classes)
 * I don't want to force every class based on Named, have that.
 *
 */
interface Named56 {
  readonly name?: string;
  outputName?: string;
}

// ? tells TS this property might exists in classes implementing this class

// You can also mark methods as optional:   myMethod?(){}

interface Greetable56 extends Named56 {
  greet(phrase: string): void;
}

class Person56 implements Greetable56 {
  //<- That's why I don't have error, even thought I dont have the outputname property.
  // I could add it. but I dont have too.
  // outputName= 'abc'

  //Also in ca class, but if it's part of interfaces it has also need to have ?
  name?: string; //<- here's not optional
  age = 30;
  constructor(n?: string) {
    // or you can add a default value in the input parameter
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name} `);
    } else {
      console.log("Hi!");
    }
  }
}

let user56a, user56b: Greetable56;
user56a = new Person56("Gino");
user56b = new Person56();

user56a.greet("Hi there.");
user56b.greet("Hi there.");
