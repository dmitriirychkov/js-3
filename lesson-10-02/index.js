const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" }
];

const giveTalonsInOrder = (patients, orders) => {
  const objectWithIndexes = patients.reduce((acc, curPerson) => {
    acc[curPerson.id] = curPerson;
    return acc;
  }, {});
  return orders.map((order) => objectWithIndexes[order]);
};

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);
