import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(2)(4);

function q4() {
  // Using the knowledge gained in question 3, extend the solution to also include a function that will only
  // allow execution if the user is in the admin role. (Note, the logger should only log if the function is
  // executed, therefore it shouldn't log when the user isn't in the admin role)
  const user = {isAdmin: true};
  // fill this in
  const doSomething = (a, b) => a + b;
  const doSomethingWithAdminOnlyThenLog;// fill this in
  doSomethingWithAdminOnlyThenLog(1, 2);
  user.isAdmin = false;
  doSomethingWithAdminOnlyThenLog(3, 4);
}

export default q4;
