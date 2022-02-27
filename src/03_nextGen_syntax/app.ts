const add = (a: number, b: number) => a + b;
console.log(add(2, 3));

//default parameter value -> have to be last in the least.
//this are not skipped when calling a function.
const add10 = (a: number, b: number = 1) => a + b;
console.log(add10(2, 3));
console.log(add10(2));

//spread operator  ...
// pull out all elements.

const hobbies1 = ["sports", "cooking"];
//console.log(hobbies1[1]);
const activeHobbies = ["hiking"];

// activeHobbies.push(hobbies1[0], hobbies1[1])
activeHobbies.push(...hobbies1);

const activeHobbies2 = ["hiking", ...hobbies1];

const person10 = {
  firstName: "Gino",
  age: 30,
};

const copiedPerson = person10; // not a real copy, pointing the same object.
const copiedPerson2 = { ...person10 }; //a real copy

//rest parameters
//---------------
//e.g. I want to add as many values as the user passes in.

const add11 = (...numbers: number[]) => {
  //numbers is an array
  let result = 0;
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0); // .reduce() input are: a function and starting value.
};

const addedNumbers11 = add11(3, 2, 4, 5, 6);
console.log(addedNumbers11);

// Rest combined with Tuples, to mamke a shorter syntax, instead of n:number, n2:number, etc.
const add12 = (...numbers: [number, number, number]) => {};

//Arrays and Object destructuring.
//-------------------------------

//typical extraction hobbies:
const hobby0 = hobbies1[0];
const hobby1 = hobbies1[1];

//Array destructuring = pull elements out of the array.
const [h0, h1, ...remainingHobbies] = hobbies1;
//in case the array has more than 2 elements, you can use rest parameter
// this does not change the original array.
//elements are pulled in order

const { firstName, age } = person10; // This is NOT a object type it is assigning, we dont have a :
// this is a special syntax
//the names has to be the same of the object's one, order does not affect.
// but we can resotore as follows:

const { firstName: username1 } = person10;
