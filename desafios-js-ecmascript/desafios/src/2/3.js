import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(2)(3);

function q3() {
  //  Write a function logger to complete the code below that will log called doSomething with arguments [1, 2] to the console
  const logger;//fill this in
  const doSomething = (a, b) => a + b;
  const doSomethingWithLog = logger('doSomething')(doSomething);

  doSomethingWithLog(1, 2);
}

export default q3;
