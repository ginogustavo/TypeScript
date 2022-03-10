/**
 * Generic Types: A type that connects with some "other type" and it's flexible
 * regarding which exact type that "other type" is. So the Generic type can give
 * us better support.
 */

const names0 = ["Max", "Gino"]; // inferred type  string[]
//const names0: Array = []; // Error Array without specifying generic type

/**
 * Array is a type itself just like Object
 * It doesn't care which type is it containing but it requires at least some one.
 *
 * setting the :any[] is better than not specifying anything
 */
//const names: any[] = []; works

const names: Array<string> = []; // same as  string[]
const names2: Array<string | number> = [];
const names3: Array<any> = [];

names[0].split(" "); // we can perform directly string operations

//Promise constructor function takes one argument, a function
const promise: Promise<number> = new Promise((resolve, reject) => {
  //in the callback fn of the timer, we could resolve the outer promise
  setTimeout(() => {
    // resolve("This is done!");
    resolve(10);
  }, 2000);
});

// This ^^ above is type Promise<unknown> -> it will eventually resolve to somthing
// But wee can specify the resolve is a type string. : Promise<string>

promise.then((data) => {
  //data.split(" "); // since the promise will yield a number, this is not allowed.
});
