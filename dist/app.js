"use strict";
function merge71(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj71 = merge71({ name: "Gino", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj71);
