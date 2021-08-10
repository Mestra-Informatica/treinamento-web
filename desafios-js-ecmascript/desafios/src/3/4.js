import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(3)(4);

async function q4() {
  // Write a function that will query the pokeapi (https://pokeapi.co/) and return the name of the pokemon
  // with id 4
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/4");
  const resultObj = await result.json();
  writeOutput(resultObj);
}

export default q4;
