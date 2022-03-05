"use strict";
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, 5);
const result2 = add("Gino", "2");
result2.split(" ");
