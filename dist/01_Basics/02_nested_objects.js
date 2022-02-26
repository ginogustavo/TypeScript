"use strict";
//const person:object = { // but we dont give any info abou the object
// overhover the person object and you will see the "inferred type"
// with key:types
const person0 = {
    name: "Gino",
    age: 30
};
//So, we should be more specific, by setting a specific object type
const person1 = {
    name: "Gino",
    age: 30
};
//Even though you can do the above, it's better to let TS to do it.
const person = {
    name: "Gino",
    age: 30
};
console.log(person);
//console.log(person.nickname);
// Nested Object:
//-----------------
//in JS:
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand new!'
    }
};
//equivalent in TS
const product3 = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand new!'
    }
};
