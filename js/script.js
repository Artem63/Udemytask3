'use strict';

let money, time; // делаем переменные глобальными

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}

start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
	&& a != '' && b != '' && a.length < 50) { 
	// ( (typeof(a)) === 'string') - проверка что данные являются строкой, 
 	// (typeof(a)) != null если юзер нажмет отмена данные не запишутся, отмена = null
 	// a != '' - проверка чтобы юзер не оставлял строку пустой, незаполненной
 	// a.length < 50 - свойство lentgh помогает ограничить кол-во вводимых знакоы в поле юзером
		
		appData.expenses[a] = b; //создаем свойство объекта: ключ = значение
	 }  else {
	 	console.log ("bad result");
        i--;
	 }
   } 
}

chooseExpenses();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();

	alert("Бюджет на 1 день:" + " " + appData.moneyPerDay);	
}

detectDayBudget();

//ниже запишем условия, в зависимости от бюджета на 1 один выводим достаток юзера
// if (appData.moneyPerDay  < 100) - цифра 100 в условии в скобках рандомная, неважно

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}

detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent; // создаем новое свойство которе равно выражению сумма накоплений разделить на 100 (чтобы в процентах получить), делим на 12 месяцев и переменную процент
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
	let d = true,
		mon = prompt("Статья необязательных расходов?", "");
	
	if ( (typeof(mon)) === 'string' && (typeof(mon)) != null && (typeof(d)) != null
	&& mon != '' && d != '' && mon.length < 50) {

	appData.optionalExpenses[d] = mon;
	 }  else {
	 	console.log ("bad result");
        i--;
	 }
	}
}

chooseOptExpenses();

console.log(appData);
// еще 2 варианта написания цикла
		// let i = 0;
		// while (i < 2) {
		// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		// 		b = prompt("Во сколько обойдется?", "");
		// 	i++;

		// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
		// 	&& a != '' && b != '' && a.length < 50) { 
				
		// 		appData.expenses[a] = b; 
		// 	 }  else {
		// 	 	console.log ("bad result");
		//         i--;
		// 	 }
		// }

		// let i = 0;
		// do {
		// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		// 		b = prompt("Во сколько обойдется?", "");

		// 	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
		// 	&& a != '' && b != '' && a.length < 50) { 
				
		// 		appData.expenses[a] = b; 
		// 	 }  else {
		// 	 	console.log ("bad result");
		//         i--;
		// 	 }
		//    	i++;
		// }

		// while (i < 2);