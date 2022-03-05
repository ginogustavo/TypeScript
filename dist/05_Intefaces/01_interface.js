"use strict";
let user51;
user51 = {
    name: "Luke",
    age: 25,
    greet(phrase) {
        console.log(`${phrase} ${this.name} `);
    },
};
user51.greet("Hi there.");
