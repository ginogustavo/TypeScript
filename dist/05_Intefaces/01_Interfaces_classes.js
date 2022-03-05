"use strict";
class Person01 {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} `);
    }
}
let user_1;
user_1 = new Person01("Gino");
user_1.greet("Hi there.");
console.log(user_1);
