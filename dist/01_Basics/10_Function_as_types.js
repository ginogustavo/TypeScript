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
//1. The problem is the "any" type, e.g. what happen if we also assign another value.
// It compiles, and then error at execution: is not a function.
let combineValues1;
combineValues1 = add2;
//combineValues1 = 5;
// console.log(combineValues1(1, 4)); // Error!
// 2. Function type helps.
let combineValues2;
combineValues2 = add2;
// combineValues# = 5; //-> identified a compile error
console.log("combineValues2 " + combineValues2(4, 4));
//3.  if assigning another function diff parameters. TS would not complain at compilation.
let combineValues3;
combineValues3 = printResult2;
console.log("combineValues3 " + combineValues3(4, 4)); // print undefined.
//4. Function types.
// They describe a function in regards of parameters and return value.
let combineValues4;
combineValues4 = add2;
// combineValues4 = printResult2;  // won't compile.
console.log("combineValues4 " + combineValues4(4, 4)); // print undefined.
