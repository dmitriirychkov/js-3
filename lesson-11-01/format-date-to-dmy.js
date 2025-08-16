function getDateFormat(date, separator = '.') {
    // Получаем день, месяц и год из объекта Date
    let day = date.getDate();
    let month = date.getMonth() + 1; // Месяцы в JS начинаются с 0
    let year = date.getFullYear();

    // Добавляем ведущий ноль, если число однозначное
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    // Формируем строку с указанным разделителем
    return `${day}${separator}${month}${separator}${year}`;
}

// Пример использования:
const today = new Date();
console.log(getDateFormat(today)); // Выведет, например, "16.08.2025" (если сегодня 16 августа 2025)
console.log(getDateFormat(today, '-')); // Выведет, например, "16-08-2025"
