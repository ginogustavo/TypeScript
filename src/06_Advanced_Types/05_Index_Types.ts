/**
 * Index Types: allows us to create objects which are more flexible regarding
 * the properties they might hold
 */

//Objective to use for any form/input in my web page (dont know how many or which one are)
//though i know the value (string)
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with character'}
  [prop: string]: string;

  //[any name like "key" or "prop"
  //: value type of the property (string, numbers, or symbols)] e.g. email, username
  //: value type

  //->It says I don't know the property name, nor property count,
  //  I only know that every property added to this object, based on ErrorContainer,
  //  must have a property name which can be interpreted as a string.

  // Then I can add predefined properties, with same type VV
  //  id: string; allowed, if added is mandatory for all subclasses
  // id: number;// wont be allowed, doesn't comply with property contract.
}
const errorBag: ErrorContainer = {
  email: "not valid email",
  //1: "not valid email", //this is also valid.
  username: "must start with capital character",
};
