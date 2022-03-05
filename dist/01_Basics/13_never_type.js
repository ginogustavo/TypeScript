"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Ocurred!", 500);
const result8 = generateError("An Error 600 Ocurred!", 600);
console.log(result8);
function generateError2(message, code) {
    throw { message: message, errorCode: code };
}
