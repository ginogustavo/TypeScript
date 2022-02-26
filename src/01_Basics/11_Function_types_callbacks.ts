//Function types and callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
// The void return in the callback fn, says it'll ignore any result you might be returning here

addAndHandle(3, 4, (result) => {
  console.log(result);
  // return  // not taken in this case, due to the "void"
});
