/**
 * Function Overload : allows you to define multiple function
 * with diff parameters.
 */
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// function add(a: number): number; // would work if we make b optional:
//               function add(a: Combinable, b?: Combinable) {
function add(a: number, b: number): number;
function add(a: string, b: string): string;
//I could add combinations
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);
const result2 = add("Gino", "2");
//result2.split(" ") // not recognized. bc the type is Cobinable (string | number)
// we could use type casting
// const result2 = add("Gino", "2") as string;  //not optimal

//after function overload, now you can VV
result2.split(" ");
