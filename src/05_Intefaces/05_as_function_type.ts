/**
 * Interfaces noly defines the structure of an object,
 * it also can define structure of a function (replacement of function types)  */

//function type:
//type AddFn = (a: number, b: number) => number;

interface AddFn55 {
  (a: number, b: number): number; //we are defining a method as the type, but
  //we dont add a method name
}
let add55: AddFn55;
add55 = (n1: number, n2: number) => {
  return n1 + n2;
};

// however, since shorter, function types are probably more common
