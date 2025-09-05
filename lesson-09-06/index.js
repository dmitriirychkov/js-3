const numbers = [10, 4, 100, -5, 54, 2];

// 1. for

let sum1 = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum1 += numbers[i] ** 3;
}
console.log("sum1", sum1);

// 2. for of

let sum2 = 0;
for (const number of numbers) {
  sum2 += number ** 3;
}
console.log("sum2", sum2);

// 3. forEach

let sum3 = 0;
numbers.forEach((number) => {
  sum3 += number ** 3;
});
console.log("sum3", sum3);

// 4. reduce

const sum4 = numbers.reduce((acc, number) => {
  return acc + number ** 3;
}, 0);
console.log("sum4", sum4);
