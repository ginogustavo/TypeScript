"use strict";
//Tuple
const person5 = {
    name: "Gino",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'author'] // infered type: (string|number)[] -> Union Type can take either one or another
};
person5.role.push('admin');
person5.role[1] = 10;
// we wanted 1st always a number and 2nd a string, but TS doesn't know that, Therefore Tuple comes into play.
const person6 = {
    name: "Gino",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'author']
};
// person6.role[1] = 10;  // This won't work. compile error.
person6.role.push('admin');
// Why the above is compiled if we said we want 2 elements? 
// .push() is an exception, which is allowed in Tuples, TS can't catch this error.
person6.role = [0, 'admin']; // allowed -> the lenght is enforced.
// person6.role = []; // Note allowed
// person6.role = [0, 'admin', 'operator']; // Not allowed
