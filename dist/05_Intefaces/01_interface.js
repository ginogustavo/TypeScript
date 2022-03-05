"use strict";
let user01;
user01 = {
    name: "Luke",
    age: 25,
    greet(phrase) {
        console.log(`${phrase} ${this.name} `);
    },
};
user01.greet("Hi there.");
