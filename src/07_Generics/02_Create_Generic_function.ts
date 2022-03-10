function merge0(objA: object, objB: object) {
  return Object.assign(objA, objB); // the intersection
}
console.log(merge0({ name: "Gino" }, { age: 33 }));

const mergedObj0 = merge0({ name: "Gino" }, { age: 33 });
// mergedObj.name // I can't access name nor age.

const mergedObj1 = merge0({ name: "Gino" }, { age: 33 }) as {
  name: string;
  age: number;
}; // but ^^ is cumbersome to do all that casting

// --- Generics ---
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Gino" }, { age: 23 });

// it doesn't work with  a:Object, b:Object) : object & object -> bc the intersection
// is another object which doesn't tell about the intersection.
// T & U are different types
console.log(mergedObj.age);

//Only thing we know is that they are 2 different types, which are set dynamically
//when we call the function.

const mergedObj2 = merge({ name: "Gino", hobbies: ["Sports"] }, { age: 23 });
//const mergedObj3 = merge<string, MyCustomObject>("Gino", { age: 23 });
//you can do it, but it's redundant
const mergedObj21 = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Gino", hobbies: ["Sports"] },
  { age: 23 }
);
