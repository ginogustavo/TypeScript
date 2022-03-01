"use strict";
function combine4(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const user1 = {
    name: "Mark",
    age: 30,
};
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greet2(client) {
    console.log("Hi, I am " + client.name);
}
function isOlder2(client, checkAge) {
    return checkAge > client.age;
}
