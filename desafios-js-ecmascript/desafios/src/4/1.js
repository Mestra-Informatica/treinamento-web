import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(4)(1);

const mapProperties = obj =>
  Object.entries(obj).map(([key, value]) => `${key}: ${value}`);

async function q1() {
  // Again using the pokeapi, use the following url https://pokeapi.co/api/v2/pokemon/?limit=9 to
  // retrieve information on the first 9 pokemon and output all the properties you get back for each
  // pokemon using the following structure:
  const pokemon = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=9"
  ).then(result => result.json());
}

export default q1;
