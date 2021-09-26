const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const button = document.querySelector('button')

/* JS will allways interpret values as String */
// function add(n1, n2){
//     return n1 + n2;
// }

/*JS number validation */
function add(n1, n2){
    if(typeof n1 === 'number' && typeof n1 === 'number') return n1 + n2;
    else return +n1 + +n2;
}
/* But I want my function simple as before, and at the same time 
prevent other types diff from number */

button.addEventListener('click', function(){
    console.log(add(number1.value, number2.value));
})
