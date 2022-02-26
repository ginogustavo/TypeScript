//never type

// throw can be send any object or value as error.

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}
generateError("An Error Ocurred!", 500);

//Since we throw, there is no return and the excution stops here.
const result = generateError("An Error 600 Ocurred!", 600);
console.log(result); // print undefined.

//the infered return type is "void".
//"never" is newer type.

//You can explicitly say never, for developers, this funtion is intended to never return anything.
function generateError2(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

//another case, which would return "never" is function with infinite loop
//  while(true){}
