//error bc we don't know whether the object really have that key
function extractAndConvert0(obj: object, key: string) {
  //return obj[key];//error
}
//extractAndConvert0({}, "name"); // will fail bc key is not guranted in this obj

//This will inform the 1st parameter should be any kind, 2nd parameter should be
// any kind of key in that object
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Gino" }, "name");
