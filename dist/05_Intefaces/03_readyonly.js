"use strict";
class Person52 {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} `);
    }
}
let user52;
user52 = new Person52("Gino");
user52.greet("Hi there.");
console.log(user52);
