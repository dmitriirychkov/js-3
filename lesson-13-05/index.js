// DevTracker Pro - Система управления карьерным ростом разработчиков

// Базовый класс Developer
class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }
    
    // Базовый метод code (пустое тело)
    code() {
        // Метод будет переопределен в дочерних классах
    }
    
    // Метод для изучения новых технологий
    learnNewTechnologies(technology) {
        this.technologies.push(technology);
    }
}

// Дочерний класс для Junior разработчиков
class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, "Junior");
        // Инициализируем базовые технологии для Junior
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }
    
    // Переопределяем метод code() (Полиморфизм)
    code() {
        console.log("Junior разработчик пишет код...");
    }
}

// Дочерний класс для Middle разработчиков
class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, "Middle");
        // Инициализируем технологии для Middle
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }
    
    // Переопределяем метод code() (Полиморфизм)
    code() {
        console.log("Middle разработчик пишет код...");
    }
}

// Дочерний класс для Senior разработчиков
class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, "Senior");
        // Инициализируем технологии для Senior
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }
    
    // Переопределяем метод code() (Полиморфизм)
    code() {
        console.log("Senior разработчик пишет код...");
    }
}

// === ТЕСТИРОВАНИЕ СИСТЕМЫ ===

// Создаем экземпляры разработчиков
const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

// Тестируем метод code() - демонстрация полиморфизма
juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

// Тестируем изучение новых технологий
seniorDeveloper.learnNewTechnologies('Docker');

// Выводим информацию о разработчиках
console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies);
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies);
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies);
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']

// === ДОПОЛНИТЕЛЬНАЯ ДЕМОНСТРАЦИЯ ВОЗМОЖНОСТЕЙ СИСТЕМЫ ===

console.log('\n=== Демонстрация дополнительных возможностей ===');

// Добавим еще технологий разным разработчикам
juniorDeveloper.learnNewTechnologies('Bootstrap');
middleDeveloper.learnNewTechnologies('Redux');

// Создадим массив всех разработчиков для демонстрации полиморфизма
const developers = [juniorDeveloper, middleDeveloper, seniorDeveloper];

console.log('\nВсе разработчики работают:');
developers.forEach(dev => {
    dev.code(); // Полиморфизм в действии!
});

console.log('\nОбновленный список технологий:');
developers.forEach(dev => {
    console.log(`${dev.fullName} (${dev.position}): ${dev.technologies.join(', ')}`);
});
