let money = 0, time = '';

const helpers = {
  checkEmptyPrompt: function (a, b) {
      if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a !== '' && b !== '' && a.length < 50) return a;
  }
};

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money === '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start ();

let appData  = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

let answers = 0; // что бы получить нужное колличество ответов



function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Введите обязательную статью расходов в этом месяце",'');
        const b = +prompt("Во сколько обойдется?", '');
        if (helpers.checkEmptyPrompt(a, b)) {
            appData.expenses[a] = b;
            answers++;
        } else {
            i = i - 1;
        }
    }
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++){
        const a = prompt("Введите не обязательную статью расходов в этом месяце",'');
        const b = +prompt("Во сколько обойдется?", '');
        if(helpers.checkEmptyPrompt(a,b)){
            appData.optionalExpenses[i + 1] = b;
        } else {
            i = i - 1;
        }
    }
}

chooseOptExpenses();

function detectDayBudget () {
    return appData.momeyPerDay = (appData.budget / 30).toFixed();
}

alert("Ежедневный бюджет " + detectDayBudget());

function detectLevel() {
    if (detectDayBudget() < 100) {
        console.log('Minimal lvl')
    } else if (detectDayBudget() > 100 && detectDayBudget() < 2000) {
        console.log('middle lvl');
    } else if( detectDayBudget() > 2000) {
        console.log('Max lvl')
    } else {
        console.log('Error')
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt('Какоа сумма сбережений?', ''),
            percent = +prompt('Под какой процент?', '');
        appData.monthIncome = save/100/12*percent;
        console.log('Доход с депозита ' + appData.monthIncome.toFixed())
    }
}

checkSavings();