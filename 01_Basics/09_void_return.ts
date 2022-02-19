//TS infer the return type, but I can specify it:
//  function add(n1: number, n2: number):number {

function add(n1: number, n2: number) {
  return n1 + n2;
}
// Note: As with variables, it's ideal to let TS do its job regarding the type inference.

function printResult(num: number) {
  console.log("Result " + num);
}
//function printResult(num: number):void  {  //-> type or return is void by default when not returning anything

printResult(add(5, 12));

//console.log(printResult(add(5, 12)));
//    |
//    V
// If we use the return type of a function that doesn't return anyting, we get "undefined" as value,
// even if we specify "void"

// "undefined" in TS is a type.
//-----------------------------
let someValue: undefined; // -> not very useful, because it will forever hold undefined.

//Use "void" if returns nothing. It does not have a "return" statement.
function func1(num: number): void {
  console.log("Result " + num);
}

//use "undefined", TS expectes a "return" statement, where you don't return a value.
function func2(num: number): undefined {
  console.log("Result " + num);
  return;
}
// you could use void, with return key
function func3(num: number): void {
  console.log("Result " + num);
  return;
}
