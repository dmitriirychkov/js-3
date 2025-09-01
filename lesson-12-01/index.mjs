const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level += 1;
        
        if (this.level === 2) {
            this.stack.push('CSS');
        } else if (this.level === 3) {
            this.stack.push('JavaScript');
        } else if (this.level === 4) {
            this.stack.push('React');
        } else if (this.level === 5) {
            this.stack.push('NodeJS');
        } else if (this.level > 5) {
            alert('Студент выучил все технологии!');
            this.showCompletionMessage();
        }
        
        this.updateUI();
        return this;
    },
    
    updateUI() {
        document.getElementById('level').textContent = this.level;
        document.getElementById('stack').textContent = this.stack.join(', ');
    },
    
    showCompletionMessage() {
        const message = document.getElementById('message');
        message.textContent = '🎉 Студент выучил все технологии!';
        message.classList.add('show');
    }
};

// Инициализация интерфейса
document.addEventListener('DOMContentLoaded', () => {
    student.updateUI();
    
    document.getElementById('improveBtn').addEventListener('click', () => {
        student.improveLevel();
    });
});

// Экспорт для возможного использования в других модулях
export { student };
