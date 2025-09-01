// Исходные массивы с кофе и ценами
const coffees = ["Latte", "Саррuccino", "Americano"];
const prices = [1.5, 1, 2];

console.log("Исходные цены:", prices);

// Создаем новый массив с обновленными ценами, увеличивая каждую цену на 0.5
const updatedPrices = prices.map((price) => {
  console.log(`Обновляем цену: ${price} -> ${price + 0.5}`);
  return price + 0.5;
});

console.log("Обновленные цены:", updatedPrices);

// Выводим уведомления для каждого типа кофе
coffees.forEach((coffee, index) => {
  const message = `Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`;
  console.log(message);
  alert(message);
});

console.log("Все уведомления отправлены!");