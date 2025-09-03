const getSumOfSequence = (number) => {
  const finalArray = [];
  for (let i = 1; i <= number; i += 1) {
    finalArray.push(i);
  }

  return finalArray[0] + finalArray[finalArray.length - 1];
};

const result = getSumOfSequence(5);
console.log("result", result);