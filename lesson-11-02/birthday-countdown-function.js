// Вспомогательная функция для перевода миллисекунд в дни
function convertMsToDays(ms) {
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

// Основная функция для расчета дней до следующего дня рождения
function getDaysBeforeBirthday(birthday) {
  const today = new Date();
  const thisYear = today.getFullYear();
  // Создаем дату дня рождения в этом году
  let nextBirthday = new Date(thisYear, birthday.getMonth(), birthday.getDate());

  // Если день рождения уже прошёл в этом году, берем следующий год
  if (nextBirthday < today) {
    nextBirthday = new Date(thisYear + 1, birthday.getMonth(), birthday.getDate());
  }

  const timeDiff = nextBirthday.getTime() - today.getTime();
  return convertMsToDays(timeDiff);
}

// Пример использования
const birthday = new Date(1988, 3, 2); // Месяц 0-11, 2 апреля
console.log(getDaysBeforeBirthday(birthday)); // Выведет количество дней до следующего дня рождения
