// Базовый класс Dictionary (из предыдущего задания)
class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = [];
    }
    
    add(word, description) {
        const wordObj = {
            word: word,
            description: description
        };
        this.words.push(wordObj);
    }
    
    remove(word) {
        this.words = this.words.filter(w => w.word !== word);
    }
    
    showAllWords() {
        this.words.forEach(w => {
            console.log(`${w.word} - ${w.description}`);
        });
    }
    
    findWord(word) {
        return this.words.find(w => w.word === word);
    }
}

// Дочерний класс HardWordsDictionary
class HardWordsDictionary extends Dictionary {
    // Конструктор наследуется автоматически от родительского класса
    
    // Переопределяем метод add()
    add(word, description) {
        const hardWordObj = {
            word: word,
            description: description,
            isDifficult: true
        };
        this.words.push(hardWordObj);
    }
}

// Тестирование класса HardWordsDictionary
console.log("=== Тестирование HardWordsDictionary ===");

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
hardWordsDictionary.remove('неологизм');
    
console.log(`\nСловарь: ${hardWordsDictionary.name}`);
console.log("Все слова в словаре:");
hardWordsDictionary.showAllWords();

// Дополнительная демонстрация структуры объектов
console.log("\n=== Структура сложных слов ===");
console.log("Объекты в массиве words:");
hardWordsDictionary.words.forEach((w, index) => {
    console.log(`${index + 1}. Объект:`, w);
});

// Демонстрация наследования других методов
console.log("\n=== Демонстрация наследования методов ===");
const foundWord = hardWordsDictionary.findWord('квант');
if (foundWord) {
    console.log("Найденное слово:", foundWord);
    console.log("Является ли сложным:", foundWord.isDifficult);
}