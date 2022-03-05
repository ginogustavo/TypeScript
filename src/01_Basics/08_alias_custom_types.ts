// Type Alias / Custom Types
//--------------------------

// It's your custom type or type alias
// "type" is TS not JS
type CombinableType = number;
// typicall you want something more than a simple regular type.
type Combinable0 = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine4(
  input1: Combinable0,
  input2: Combinable0,
  resultConversion: ConversionDescriptor
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

//Object Types
type User = {
  name: string;
  age: number;
};
const user2: User = {
  name: "Mark",
  age: 30,
};
// Avoid unnecessary repetition and manage types centrally.

// Also, you can sinplify these:
function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

//to
type Client = {
  name: string;
  age: number;
};
function greet2(client: Client) {
  console.log("Hi, I am " + client.name);
}

function isOlder2(client: Client, checkAge: number) {
  return checkAge > client.age;
}
