let money = 0, time = '';
let answers = 0; // что бы получить нужное колличество ответов

const helpers = {
    checkEmptyPrompt: function (a, b) {
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a !== '' && b !== '' && a.length < 50) return a;
    }
};

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money === '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Введите обязательную статью расходов в этом месяце", '');
            const b = +prompt("Во сколько обойдется?", '');
            if (helpers.checkEmptyPrompt(a, b)) {
                appData.expenses[a] = b;
                answers++;
            } else {
                i = i - 1;
            }
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            const a = prompt("Введите не обязательную статью расходов в этом месяце", '');
            const b = +prompt("Во сколько обойдется?", '');
            if (helpers.checkEmptyPrompt(a, b)) {
                appData.optionalExpenses[i + 1] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        return appData.momeyPerDay = (appData.budget / 30).toFixed();
    },
    detectLevel: function () {
        if (appData.detectDayBudget() < 100) {
            console.log('Minimal lvl')
        } else if (appData.detectDayBudget() > 100 && detectDayBudget() < 2000) {
            console.log('middle lvl');
        } else if (appData.detectDayBudget() > 2000) {
            console.log('Max lvl')
        } else {
            console.log('Error')
        }
    },

    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt('Какоа сумма сбережений?', ''),
                percent = +prompt('Под какой процент?', '');
            appData.monthIncome = save / 100 / 12 * percent;
            console.log('Доход с депозита ' + appData.monthIncome.toFixed());
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход (укажите через запятую)', '');
        appData.income.push(prompt('Может еще что-то?'), '');
        while (typeof (items) == null || items == "" || typeof(items) != "string"){
            items = prompt('Вы не указали дополнительный доход (укажите через запятую)', '');
        }
        appData.income = items.split(',');
        appData.income.sort();
        appData.income.forEach(function (item, i) {
            console.log('Доход №' + (i + 1) +') ' + item, );
        })
    }
};


for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key)
}