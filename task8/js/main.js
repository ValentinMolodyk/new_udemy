

// values
const startBtn = document.getElementById('start');
const budgetValue = document.getElementsByClassName('budget-value')[0];
const dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
const levelValue = document.getElementsByClassName('level-value')[0];
const expensesValue = document.getElementsByClassName('expenses-value')[0];
const optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
const incomeValue = document.getElementsByClassName('income-value')[0];
const monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
const yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// expenses-item
const expensesItem = document.querySelectorAll('.expenses-item');

// buttons
const btnExpense = document.getElementsByTagName('button')[0];
const btnExpenseOptional = document.getElementsByTagName('button')[1];
const btnCount = document.getElementsByTagName('button')[2];
const btnCollection = document.querySelectorAll('button');

//optionalExpenses-item3
const optionalExpenses = document.querySelectorAll('.optionalexpenses-item');

//all another data
const chooseIncomeInput = document.querySelector('.choose-income');
const savingsCheck = document.querySelector('#savings');
const sumValue = document.querySelector('.choose-sum');
const percentValue = document.querySelector('.choose-percent');
const yearValue = document.querySelector('.year-value');
const monthValue = document.querySelector('.month-value');
const dayValue = document.querySelector('.day-value');


let money = 0, time = '';

const helpers = {
    checkEmptyPrompt: function (a, b) {
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a !== '' && b !== '' && a.length < 50) return a;
    },
    disableBtn: function (disable) {
        for (let i = 0; i < btnCollection.length - 1; i++) {
            btnCollection[i].disabled = disable;
        }
    }
};

helpers.disableBtn(true);

startBtn.addEventListener('click', function () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money === '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    if (money) {
        helpers.disableBtn(false);
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpense.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        const a = expensesItem[i].value;
        const b = expensesItem[++i].value;
        if (helpers.checkEmptyPrompt(a, b)) {
            appData.expenses[a] = b;
            sum += +b;
        }
    }
    appData.sumExpensess = sum;
    expensesValue.textContent = sum ? sum : 'Введите обязательные расходы';
});


btnExpenseOptional.addEventListener('click', function () {
    for (let i = 0; i < optionalExpenses.length; i++) {
        if (optionalExpenses[i].value) {
        appData.optionalExpenses[i] = optionalExpenses[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
        }
    }
});

btnCount.addEventListener('click', function () {

    if (!appData.budget) {
        return;
    }
    appData.momeyPerDay = ((appData.budget - appData.sumExpensess) / 30).toFixed();
    dayBudgetValue.textContent = appData.momeyPerDay;

    if (appData.momeyPerDay < 100) {
        levelValue.textContent = 'Минимальный lvl';
    } else if (appData.momeyPerDay > 100 && appData.momeyPerDay < 2000) {
        levelValue.textContent = 'Средний lvl';
    } else if (appData.momeyPerDay > 2000) {
        levelValue.textContent = 'Максимальный lvl';
    } else {
        levelValue.textContent = 'Ошибка';
    }
});

chooseIncomeInput.addEventListener('input', function () {
    appData.income = chooseIncomeInput.value.split(', ');
    incomeValue.textContent = chooseIncomeInput.value;
});

savingsCheck.addEventListener('click', function (event) {
    appData.savings = !appData.savings;
});

sumValue.addEventListener('input', function () {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.yarIncome = sum/100/12*percent;
        appData.monthIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yarIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.yarIncome = sum/100/12*percent;
        appData.monthIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yarIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

