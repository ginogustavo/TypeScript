/*
Some IDEs may find errors for TS, e.g. The const is used in other files.

The error on value, is because TS would not be able to confirm
if the element got with getElementID exists. Even if the name exist,
maybe it's a html component without value attribute

TS forces us to be more clear about our intentions (dobule check our code)

e.g. let TS know we are sure we'll get an element with  ! symbol
*/
// ! - tells that the element will never yield null 
// TypeCasting (as HTMLInputElement) - always be an input element
var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
// This is TS syntax (!, TypeCasting) bc we are in a .ts file
// and compile this to JS (this won't work in Vanilla JS)
var button = document.querySelector('button');
// Biggest advantage is the additional types, e.g. n1:number in parameters
function add(n1, n2) {
    return n1 + n2;
}
button.addEventListener('click', function () {
    console.log(add(+number1.value, +number2.value));
});
// number1.value gets a String and the function expects a number
// to fix this just assign the + sign.
// * When compiling this syntax/structure is used to evaluate your code
//   and find potential errors and then they are stripped out.
// * That's why is .. it forces us to write better, cleaner and 
//   less error prone code
