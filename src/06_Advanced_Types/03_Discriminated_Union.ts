//Discriminated Unions: a pattern which you can use when workign with Union Types,
//That makes implementing type guards easier. Available when you work with object types.

//also work with classes
interface Bird63 {
  type: "Bird"; //could be kind
  //In this Interface, this is not a value for the "type" property
  //This is a literal type. where type must hold a string, which must be bird
  // a type assigment, where we narrowed down the value that may be store in type,
  // to exaclty this string value.

  flyingSpeed: number;
}
interface Horse63 {
  type: "Horse";
  runningSpeed: number;
}
//-> Discriminated Union have one common property in every object
// that makes up our union, which describe that object... VV
type Animal63 = Bird63 | Horse63;

// ... and we can check we 100% type safety
function moveAnimal63(animal: Animal63) {
  let speed;
  switch (animal.type) {
    case "Bird":
      speed = animal.flyingSpeed;
      break;
    case "Horse":
      speed = animal.runningSpeed;
      break;
    default:
  }
  console.log("moving at speed " + speed);
}

moveAnimal63({ type: "Bird", flyingSpeed: 50 });
