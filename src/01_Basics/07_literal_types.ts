//Literal types.
const n1 = 5;
let n2: number;
const n3: number = 5;
const n4 = 2.8; // since the constant is alrady defined, the type is a specific number

//Sample 2

function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //VALIDATION
  if (resultConversion === "as-number") {
    return +result; //parseFloat(result) also valid
  } else {
    return result.toString();
  }
}

console.log(combine2(30, 26, "as-number"));
console.log(combine2("30", "26", "as-number"));
console.log(combine2("Demo", "String", "as-text"));

function combine3(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" //Union Types combined with Literal types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number" // not allowed if we compare another value.
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine3("30", "26", "as-number"));
// console.log(combine3("30", "26", "as-num"));// not allowed
