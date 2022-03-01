"use strict";
const person4 = {
    name: "Gino",
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
let favoriteActivities;
favoriteActivities = ['Sports'];
let favoriteActivities2;
console.log(person4.name);
for (const hobby of person4.hobbies) {
    console.log(hobby.toUpperCase());
}
