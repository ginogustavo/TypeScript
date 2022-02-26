function add02(n1: number, n2: number, showResult: boolean, phrase: string) {
  //console.log(typeof n1)
  // if(typeof n1 !== 'number' || typeof n2 !=='number'){
  //      throw new Error('Incorrect input!')
  // }

  const result = n1 + n2;
  if (showResult) {
    //console.log(phrase + n1+n2);
    //but again the previous bug: we concatenate a string with numbers-> everything become string.

    console.log(phrase + result);
  } else {
    return result;
  }
}
let number1 = 5;
const number2: number = 2.8; // we could do it but it's redundant, not good practice. bc TC is able to infere this. declaration.
let number3: number;
number3 = 45;

const printResult = true;
const resultPhrase = "Result is: ";
// const result = add(number1, number2, printResult);
// console.log(result)

add02(number1, number2, printResult, resultPhrase);

//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
