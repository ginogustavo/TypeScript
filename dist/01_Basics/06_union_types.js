"use strict";
//Union Types
// to combine either numbers or strings
// for numbers case - > sum
// for string case -> concatenation
//Here Union types helps us.
// we use number | string | boolean
function combine(input1, input2) {
    //workaround bc it when applying + operator, it expect multiple types, TS doesn't analyze what's in the union type.
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(56, 13));
console.log(combine("Demo", "String"));
//We don't always need the validation but we often do, bc TS cannot be more flexible for union types
