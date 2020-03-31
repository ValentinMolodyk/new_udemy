const money = prompt("Ваш бюджет на месяц?", "");
// не совсем понял, зачем тут дата в таком формате.
const time = prompt("Введите дату в формате YYYY-MM-DD", "");
const oneDayMoney = money / 30;

let appData  = {
    moneyData: money,
    timeData: time,
    expenses: {},
    income: []
};

const expensesName = prompt("Введите обязательную статью расх    одов в этом месяце","");
const expensesNum = prompt("Во сколько обойдется?", "");
appData.expenses[expensesName] = expensesNum;

alert(oneDayMoney);