/**
 * Type Constrains:  for the generic types can be based on
 *
 * T type can be any object with any structure but it has to be an object
 */

function merge71<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// extends   string, MyCustomObject,  string|number (union types)
// - you don't need to contrains all, i.e. just one

const mergedObj71 = merge71({ name: "Gino", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj71); // the number not included
// When assign 20 to the ObjB it fails sillently
// assign only merge diff objects
