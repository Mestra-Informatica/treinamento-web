import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(1)(4);

function q4() {
  const a = Array.from(new Array(100), (val, index) => index + 1); // Array [1,2...,100]
  // return a new array with every element doubled.
}

export default q4;
