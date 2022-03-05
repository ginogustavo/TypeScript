"use strict";
class Person54 {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} `);
    }
}
let user54;
user54 = new Person54("Gino");
user54.greet("Hi there.");
console.log(user54);
