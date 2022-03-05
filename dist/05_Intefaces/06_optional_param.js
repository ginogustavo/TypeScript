"use strict";
class Person56 {
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
let user56a, user56b;
user56a = new Person("Gino");
user56b = new Person();
user56a.greet("Hi there.");
user56b.greet("Hi there.");
