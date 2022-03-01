"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Ocurred!", 500);
const result = generateError("An Error 600 Ocurred!", 600);
console.log(result);
function generateError2(message, code) {
    throw { message: message, errorCode: code };
}
