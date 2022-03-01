"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log("Result " + num);
}
let combineValues;
combineValues = add2;
console.log(combineValues(1, 4));
let combineValues1;
combineValues1 = add2;
let combineValues2;
combineValues2 = add2;
console.log("combineValues2 " + combineValues2(4, 4));
let combineValues3;
combineValues3 = printResult2;
console.log("combineValues3 " + combineValues3(4, 4));
let combineValues4;
combineValues4 = add2;
console.log("combineValues4 " + combineValues4(4, 4));
