//TS infer the return type, but I can specify it:
//  function add(n1: number, n2: number):number {
function add(n1, n2) {
    return n1 + n2;
}
// Note: As with variables, it's ideal to let TS do its job regarding the type inference.
function printResult(num) {
    console.log("Result " + num);
}
//function printResult(num: number):void  {  //-> type or return is void by default when not returning anything
// printResult(add(5, 12));
console.log(printResult(add(5, 12)));
