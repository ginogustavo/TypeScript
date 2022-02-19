//Literal types.
var n1 = 5;
var n2;
var n3 = 5;
var n4 = 2.8; // since the constant is alrady defined, the type is a specific number
//Sample 2
function combine2(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //VALIDATION
    if (resultConversion === "as-number") {
        return +result; //parseFloat(result) also valid
    }
    else {
        return result.toString();
    }
}
console.log(combine2(30, 26, "as-number"));
console.log(combine2("30", "26", "as-number"));
console.log(combine2("Demo", "String", "as-text"));
function combine3(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
