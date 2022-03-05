/**
 * Nullish coalescing: helps us deal with Nullish data
 *
 * If you have some data, input, where you don't know with certainity
 *  whether it's null, or undefined or a valid piece of data.
 */

//const userData = ""; // here is hardcoded, but it could be fethced from DOM or an API

const userData = undefined; // -> make print DEFAULT

//make sure that if its null, you store a fallback value

//can be done with logical OR -> PROBLEM: if it's empty string '' is treated as falsy value
const storedData0 = userData || "DEFAULT";

// but you may want to keep empty '' as valid and should be true.

// We have the ?? operator
const storedData = userData ?? "DEFAULT";
//-> if this is null or undefined , not empty string not zero, just null or defined
//    then use the fallback.

console.log(storedData);
