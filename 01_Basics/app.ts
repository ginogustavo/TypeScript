function add(n1: number, n2: number) {
  return n1 + n2; //return type is inferred by TS
  //The signature (see when you hover over the function) says it has "number" as return type.
}

//we can explicitly assign a return type
function add2(n1: number, n2: number): number {
  return n1 + n2;
}

/*Just as with variables, it's a good idea to let TS to do its job regarding type inference.
and if you have no specific reason for explicitly setting the type, you should therefore 
Not set the type, and instead let TS infer the type.
*/

function printResult(num: number) {
  console.log(num);*
}
