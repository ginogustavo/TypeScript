"use strict";
function merge0(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge0({ name: "Gino" }, { age: 33 }));
const mergedObj0 = merge0({ name: "Gino" }, { age: 33 });
const mergedObj1 = merge0({ name: "Gino" }, { age: 33 });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Gino" }, { age: 23 });
console.log(mergedObj.age);
const mergedObj2 = merge({ name: "Gino", hobbies: ["Sports"] }, { age: 23 });
const mergedObj21 = merge({ name: "Gino", hobbies: ["Sports"] }, { age: 23 });
