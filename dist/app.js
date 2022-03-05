"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name} `);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user1, user02;
user1 = new Person("Gino");
user02 = new Person();
user1.greet("Hi there.");
user02.greet("Hi there.");
