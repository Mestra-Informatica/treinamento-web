import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(2)(2);
function q2() {
  // Write a function add that will allow the following code to work
  const add;
  const add2 = add(2);
  if (add2(7) === 9) {
    writeOutput("It worked!");
  } else {
    writeOutput("It is broken");
  }
}

export default q2;
