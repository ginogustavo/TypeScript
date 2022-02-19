//unknown type
let userInput: unknown;
// we dont know yet what the user will enter. we can store anything with error.

userInput = 5;
userInput = "Gino";

//"unknow" is different to "any"

//1. assigning to a uknown
let userName: string;
//userName = userInput // compile error. is not guaranteed.

//2. assigning to an any
let userInput2: any;
let userName2: string;
userName2 = userInput2; // it's ok

// unknown is more restricted, you would need to validate
if (typeof userInput === "string") {
  userName = userInput;
}

//Wny to use it? and better than any.  I may not know the type now,
//but I KNOW WHAT I WANT TO DO WITH IT EVENTUALLY.
// will add an extra check to make sure that what you want to do can be done.

//Also, it makes sure that you are not allowed to do everything,
//but have at least some type checking.
