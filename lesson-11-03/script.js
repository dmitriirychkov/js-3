function addDays(date, days) {
    // 86400000 - количество миллисекунд в одном дне (24 * 60 * 60 * 1000)
    return new Date(date.getTime() + days * 86400000);
}
