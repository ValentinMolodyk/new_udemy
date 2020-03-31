const money = +prompt("Ваш бюджет на месяц?", "");
const time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData  = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let answers = 0; // что бы получить нужное колличество ответов

// цикл for
// for (let i = 0; i < 3; i++) {
//     const a = prompt("Введите обязательную статью расходов в этом месяце","");
//     const b = prompt("Во сколько обойдется?", "");
//     if (typeof(a) === 'string'
//         && typeof(a) != null
//         && typeof(b) != null
//         && a !== ''
//         && b !== ''
//         && a.length < 50) {
//         appData.expenses[a] = b;
//         answers++;
//         console.log('done');
//         console.log(i)
//     } else {
//         i <= 0 ? i = 0 : i = answers;
//         console.log(i)
//     }
// }

// цикл while

// let i = 0;
// while (i < 2){
//     const a = prompt("Введите обязательную статью расходов в этом месяце","");
//     const b = prompt("Во сколько обойдется?", "");
//     if (typeof(a) === 'string'
//         && typeof(a) != null
//         && typeof(b) != null
//         && a !== ''
//         && b !== ''
//         && a.length < 50) {
//         appData.expenses[a] = b;
//         console.log('done');
//         i++;
//         answers++;
//     } else {
//        i <= 0 ? i = 0 : i = answers;
//     }
// }

// цикл do while

let i = 0;
do {
    const a = prompt("Введите обязательную статью расходов в этом месяце","");
    const b = prompt("Во сколько обойдется?", "");
    if (typeof(a) === 'string'
        && typeof(a) != null
        && typeof(b) != null
        && a !== ''
        && b !== ''
        && a.length < 50) {
        appData.expenses[a] = b;
        console.log('done');
        i++
        answers++
    } else {
        i <= 0 ? i = 0 : i = answers;
    }
} while (i < 2);
// end

appData.momeyPerDay = appData.budget / 30;

alert(appData.momeyPerDay);

if (appData.momeyPerDay < 100) {
    console.log('Minimal lvl')
} else if (appData.momeyPerDay > 100 && appData.momeyPerDay < 2000) {
    console.log('middle lvl');
} else if( appData.momeyPerDay > 2000) {
    console.log('Max lvl')
} else {
    console.log('Error')
}