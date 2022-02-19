function add2(n1: number, n2: number) {
  return n1 + n2;
}
function printResult2(num: number) {
  console.log("Result " + num);
}

let combineValues5: (a: number, b: number) => number;
combineValues5 = add2;
console.log(combineValues5(1, 2));
