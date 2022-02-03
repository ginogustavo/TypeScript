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
const num1 = document.getElementById('num1')! as HTMLInputElement; 
const num2 = document.getElementById('num2')! as HTMLInputElement;

// This is TS syntax (!, TypeCasting) bc we are in a .ts file
// and compile this to JS (this won't work in Vanilla JS)

const button = document.querySelector('button')

// Biggest advantage is the additional types, e.g. n1:number in parameters

function add0(n1:number, n2:number){
    return n1 + n2;
}
button.addEventListener('click', function(){
    console.log(add0(+num1.value, +num2.value));
})
// number1.value gets a String and the function expects a number
// to fix this just assign the + sign.

// * When compiling this syntax/structure is used to evaluate your code
//   and find potential errors and then they are stripped out.
// * That's why is .. it forces us to write better, cleaner and 
//   less error prone code