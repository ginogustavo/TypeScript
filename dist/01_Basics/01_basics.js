"use strict";
function add02(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1 = 5;
const number2 = 2.8;
let number3;
number3 = 45;
const printResult = true;
const resultPhrase = "Result is: ";
add02(number1, number2, printResult, resultPhrase);
