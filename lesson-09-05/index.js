const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  const clientEstimationString = prompt(
    "Как вы оцениваете нашу кофейню от 1 до 10?"
  );
  const clientEstimation = Number(clientEstimationString);
  if (clientEstimation >= 1 && clientEstimation <= 10) {
    clientsEstimations.push(clientEstimation);
  }
};

for (let i = 0; i < 5; i += 1) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
);
const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
);

console.log(goodEstimations, notGoodEstimations);

alert(
  `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
);