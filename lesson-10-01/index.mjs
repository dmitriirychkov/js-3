const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 18
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 184
    }
];

// Получаем онлайн пользователей
const onlineUsers = users.filter(user => user.status === 'online');

// Получаем имена через запятую
const onlineUserNames = onlineUsers.map(user => user.username).join(', ');

// Выводим сообщение
alert(`Сейчас в онлайн следующие пользователи: ${onlineUserNames}`);

// Дополнительно: выводим информацию в консоль
console.log('Онлайн пользователи:', onlineUserNames);