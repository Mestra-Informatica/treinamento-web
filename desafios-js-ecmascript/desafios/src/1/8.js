import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(1)(8);

function sum(valueAccessor, array) {
  return array.reduce((rv, curr) => rv + valueAccessor(curr), 0);
}

function q8() {
  const games = [
    { title: "Dark Souls 3", platform: "PS4", price: 34.99, inventory: 10 },
    { title: "Mario Kart 8", platform: "Switch", price: 39.99, inventory: 5 },
    { title: "Fifa 18", platform: "PS4", price: 44.99, inventory: 2 },
    {
      title: "Binding of Isaac",
      platform: "Xbox One",
      price: 15.99,
      inventory: 15
    },
    { title: "League of Legends", platform: "PC", price: 0.0 }
  ];

  // return the total cost for the entire inventory.
}

export default q8;
