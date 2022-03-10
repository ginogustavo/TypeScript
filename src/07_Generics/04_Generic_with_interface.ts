interface Lengthy {
  length: number;
}
// compiled errors bc it's not clear that element has lenght, we should make it clear ^^
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText]; // returning a Tuple
}

console.log(countAndDescribe("Hi There"));
console.log(countAndDescribe(["sports", "cooking"]));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(10)); // a number has no lenght.
