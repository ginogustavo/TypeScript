"use strict";
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.querySelector("button");
function add0(n1, n2) {
    return n1 + n2;
}
button.addEventListener("click", function () {
    console.log(add0(+num1.value, +num2.value));
});
