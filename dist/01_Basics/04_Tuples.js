"use strict";
const person5 = {
    name: "Gino",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'author']
};
person5.role.push('admin');
person5.role[1] = 10;
const person6 = {
    name: "Gino",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'author']
};
person6.role.push('admin');
person6.role = [0, 'admin'];
