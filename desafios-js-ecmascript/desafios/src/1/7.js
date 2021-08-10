import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(1)(7);

function sum(valueAccessor, array) {
  return array.reduce((rv, curr) => rv + valueAccessor(curr), 0);
}

function q7() {
  const games = [
    { title: "Dark Souls 3", platform: "PS4", price: 34.99 },
    { title: "Mario Kart 8", platform: "Switch", price: 39.99 },
    { title: "Fifa 18", platform: "PS4", price: 44.99 },
    { title: "Binding of Isaac", platform: "Xbox One", price: 15.99 },
    { title: "League of Legends", platform: "PC", price: 0.0 }
  ];

  // return the total cost for all items
}

export default q7;
