import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(3)(5);
const fetchAsJson = url => fetch(url).then(result => result.json());

async function q5() {
  // Write a function that will query the pokeapi for the pokemon with ids 1,4,7 and return the name of the
  // heaviest of the three
  const bulbasaurPromise = fetchAsJson("https://pokeapi.co/api/v2/pokemon/1");
  const charmanderPromise = fetchAsJson("https://pokeapi.co/api/v2/pokemon/4");
  const squirtlePromise = fetchAsJson("https://pokeapi.co/api/v2/pokemon/7");
  const pokemon = await Promise.all([
    bulbasaurPromise,
    charmanderPromise,
    squirtlePromise
  ]);
}

export default q5;
