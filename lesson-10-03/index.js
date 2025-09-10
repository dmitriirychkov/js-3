function handleObject(obj, key, action) {
    // Проверяем тип действия и выполняем соответствующую операцию
    switch (action) {
        case 'get':
            // Возвращаем значение свойства по ключу
            return obj[key];
            
        case 'add':
            // Добавляем новое свойство с пустой строкой как значение
            obj[key] = "";
            // Возвращаем обновленный объект
            return obj;
            
        case 'delete':
            // Удаляем свойство из объекта
            delete obj[key];
            // Возвращаем обновленный объект
            return obj;
            
        default:
            // Если action не соответствует ни одному из ожидаемых значений
            // Возвращаем исходный объект без изменений
            return obj;
    }
}

// Тестирование функции
const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
};

console.log('Исходный объект:', student);

// Тест операции 'get'
const getName = handleObject(student, 'name', 'get');
console.log('get name:', getName); 

// Тест операции 'add'
const withNewProperty = handleObject(student, 'age', 'add');
console.log('add age:', withNewProperty); 

// Тест операции 'delete'
const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('delete programmingLanguage:', result); 

// Тест с неизвестным действием
const unchanged = handleObject(student, 'name', 'unknown');
console.log('unknown action:', unchanged); 