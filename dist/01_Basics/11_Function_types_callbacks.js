"use strict";
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(3, 4, (result) => {
    console.log(result);
});
