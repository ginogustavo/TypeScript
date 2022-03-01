"use strict";
const n1 = 5;
let n2;
const n3 = 5;
const n4 = 2.8;
function combine2(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
console.log(combine2(30, 26, "as-number"));
console.log(combine2("30", "26", "as-number"));
console.log(combine2("Demo", "String", "as-text"));
function combine3(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine3("30", "26", "as-number"));
