"use strict";
const add = (a, b) => a + b;
console.log(add(2, 3));
const add10 = (a, b = 1) => a + b;
console.log(add10(2, 3));
console.log(add10(2));
const hobbies1 = ["sports", "cooking"];
const activeHobbies = ["hiking"];
activeHobbies.push(...hobbies1);
const activeHobbies2 = ["hiking", ...hobbies1];
const person10 = {
    firstName: "Gino",
    age: 30,
};
const copiedPerson = person10;
const copiedPerson2 = Object.assign({}, person10);
const add11 = (...numbers) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers11 = add11(3, 2, 4, 5, 6);
console.log(addedNumbers11);
const add12 = (...numbers) => { };
const hobby0 = hobbies1[0];
const hobby1 = hobbies1[1];
const [h0, h1, ...remainingHobbies] = hobbies1;
const { firstName, age } = person10;
const { firstName: username1 } = person10;
