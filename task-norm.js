'use strict';

//norm-1
alert(`Дізнаємось чи Ваше пʼятирозрядне число є палінромом!`);
let firstDigit;
let secondDigit;
let fourthDigit;
let fifthDigit;

let fiveDigitNum = prompt("Введіть п’ятирозрядне число");
console.log(fiveDigitNum.length);
let lenNum = fiveDigitNum.length;

if (lenNum != 5) {
    alert("Це не п’ятирозрядне число");
} else {
    firstDigit = fiveDigitNum[0];
    secondDigit = fiveDigitNum[1];
    fourthDigit = fiveDigitNum[3];
    fifthDigit = fiveDigitNum[4];
    if (firstDigit == fifthDigit && secondDigit == fourthDigit) {
        alert("Число є паліндромом");
    } else {
        alert("Число не є паліндромом");
    }
}

//norm-2
alert(`Давайте розрахуємо знижку для вашої покупки!`);
let purchaseAmount;
let amountToPay;
let percent;

purchaseAmount = Number(prompt(`Яка сума покупки?`));

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    percent = purchaseAmount * 0.03;
    amountToPay = purchaseAmount - percent;
    alert(`Вам надана знижка 3%!`);
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    percent = purchaseAmount * 0.05;
    amountToPay = purchaseAmount - percent;
    alert(`Вам надана знижка 5%!`);
} else if (purchaseAmount >= 500) {
    percent = purchaseAmount * 0.07;
    amountToPay = purchaseAmount - percent;
    alert(`Вам надана знижка 7%!`);
} else {
    amountToPay = purchaseAmount;
    alert(`На жаль сьогодні без знижки :(`);
}

alert(`До оплати буде: ${amountToPay}`);

//norm-3
alert(`Мені потрібні 10 чисел! Ти можеш ввести на одне віконце - одне число, воно може бути будь-яким!`)
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
let num;

for(let i = 1; i < 10; i++) {
    num = Number(prompt("Введіть число"));
    if (num > 0) {
        positiveCount += 1;
    } else if (num < 0) {
        negativeCount += 1;
    } else {
        zeroCount += 1;
    }

    if (num % 2 == 0) {
        evenCount += 1;
    } else {
        oddCount += 1;
    }
}

alert(`Додатні числа: ${positiveCount}`);
alert(`Відʼємні числа: ${negativeCount}`);
alert(`Нулі: ${zeroCount}`);
alert(`Парні числа: ${evenCount}`);
alert(`Непарні числа: ${oddCount}`);

//norm-4
let weekday = 7;
let nextDay;

do {
    switch (weekday) {
        case 1:
            nextDay = confirm('Понеділок. Хочеш побачити наступний день?');
            break;
        case 2:
            nextDay = confirm('Вівторок. Хочеш побачити наступний день?');
            break;
        case 3:
            nextDay = confirm('Середа. Хочеш побачити наступний день?');
            break;
        case 4:
            nextDay = confirm('Четвер. Хочеш побачити наступний день?');
            break;
        case 5:
            nextDay = confirm('Пʼятниця. Хочеш побачити наступний день?');
            break;
        case 6:
            nextDay = confirm('Субота. Хочеш побачити наступний день?');
            break;
        case 7:
            nextDay = confirm('Неділя. Хочеш побачити наступний день?');
            break;
    }

    if (nextDay) {
        weekday = weekday + 1;
        if (weekday > 7) {
            weekday = 1;
        }
    }
} while (nextDay);
