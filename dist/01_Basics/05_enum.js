"use strict";
/*
Enum
----
Only in TS, are automatically enumerated global constan indentifiers.
The labels are just translated to numbres starting form 0.
e.g.  enum {NEW, OLD}
Thus we avoid used strings, or numbers so we could get confused
const ADMIN = 1 or ADMIN = 'ADMIN'
*/
// const ADMIN = 0;
// const READ_ONLY=1;
// role: ADMIN
//if(person7.role === ADMIN){
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // upper case is not mandatory;
//behind the scenes ADMIN receives value 0, READ_ONLY the value of 1, AUTHOR, value 2
//you can change values.
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 5] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 6] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 7] = "AUTHOR";
})(Role2 || (Role2 = {}));
; //next ones increment in 1, READ_ONLY = 6, and so on. or you can assign your own values READ_ONLY = 150,etc
var Role3;
(function (Role3) {
    Role3["ADMIN"] = "admin";
    Role3[Role3["READ_ONLY"] = 100] = "READ_ONLY";
    Role3[Role3["AUTHOR"] = 101] = "AUTHOR";
})(Role3 || (Role3 = {}));
; // can be strings and a mix of them.
const person7 = {
    name: "Gino",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person7.role === Role.AUTHOR) {
    console.log('is admin');
}
