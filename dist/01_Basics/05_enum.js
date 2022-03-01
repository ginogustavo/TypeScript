"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 5] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 6] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 7] = "AUTHOR";
})(Role2 || (Role2 = {}));
;
var Role3;
(function (Role3) {
    Role3["ADMIN"] = "admin";
    Role3[Role3["READ_ONLY"] = 100] = "READ_ONLY";
    Role3[Role3["AUTHOR"] = 101] = "AUTHOR";
})(Role3 || (Role3 = {}));
;
const person7 = {
    name: "Gino",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person7.role === Role.AUTHOR) {
    console.log('is admin');
}
