/**
 *Type Casting: helps TS to identify that some value is of a specific type
 */
const paragraph0 = document.querySelector("p"); // <p></p> HTMLParagraphElement
const paragraph = document.getElementById("message-output"); // HTMLElement

const userInputElement0 = document.getElementById("user-input")!;
//userInputElement0.value = "Hello there"; // error VV

//we could fix the error adding ! in the getElementById,
// but value still does not exist on type HTML Element

// Casting Option 1
const userInputElement1 = <HTMLInputElement>(
  document.getElementById("user-input")!
);
userInputElement1.value = "hi, new value";
//HTMLInputElement is available bc we added "dom" in lib in tsconfig.json

// Casting Option 2
//To avoid conflict with React RXS use of <>, we can use
const userInputElement2 = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement2.value = "hi, option 2";

//Other option for Making sure if exist besides !
if (userInputElement0) {
  (userInputElement0 as HTMLInputElement).value = "old value";
}
