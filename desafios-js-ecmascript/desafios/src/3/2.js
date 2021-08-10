import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(3)(2);

function q2() {
  // Write a function that will query the pokeapi for the pokemon with ids 1,4,7 and return the name of the
  // heaviest of the three
  const bulbasaurPromise = fetch("https://pokeapi.co/api/v2/pokemon/1").then(
    //code
  );
  const charmanderPromise = fetch("https://pokeapi.co/api/v2/pokemon/4").then(
    //code
  );
  const squirtlePromise = fetch("https://pokeapi.co/api/v2/pokemon/7").then(
    //code
  );
  return Promise.all([bulbasaurPromise, charmanderPromise, squirtlePromise]);
}

export default q2;
