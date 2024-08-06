'use strict';

//min - 1
alert(`Привіт!`);
let age = prompt(`Скільки Вам років?`);

if (age <= 11) {
    alert(`То Ви дитина!`);
} else if (age <= 17) {
    alert(`То Ви підліток!`);
} else if (age <= 59) {
    alert(`То Ви вже дорослий!`);
} else if (age >= 60) {
    alert(`То Ви пенсіонер`);
} else {
    alert(`Це не схоже на вік`);
}

//min-2
alert(`Дізнаємось спецсимвол!`);
let figure = prompt(`Введіть цифру від 0 до 9`);

switch (figure) {
    case '1':
        alert('!');
        break;
    case '2':
        alert('@');
        break;
    case '3':
        alert('#');
        break;
    case '4':
        alert('$');
        break;
    case '5':
        alert('%');
        break;
    case '6':
        alert('^');
        break;
    case '7':
        alert('&');
        break;
    case '8':
        alert('*');
        break;
    case '9':
        alert('(');
        break;
    case '0':
        alert(')');
        break;
}

//min-3
alert(`Дізнаємось суму чисел заданого діапазону!`);
let start = Number(prompt(`Задайте початкове значення`));
let end = Number(prompt(`Задайте кінцеве значення`));
let sum = 0;

if (isNaN(start) || isNaN(end)) {
    alert(`Будь ласка, введіть коректні числа`);
} else if (start > end) {
    alert(`Початкове значення не повинно бути більше кінцевого`);
} else {
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    alert(`Сума чисел у діапазоні від ${start} до ${end} дорівнює ${sum}`);
}

//min 4
alert(`Дізнаємось спільний дільник!`);
let num1 = Number(prompt(`Введіть число`));
let num2 = Number(prompt(`Введіть друге число`));

while (num2 != 0) {
    let remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
}

alert(`Найбільший спільний дільник початкових чисел є ${num1}`);

//min-5
alert(`Дізнаємось дільник числа!`);
let num = Number(prompt(`Введіть число`));

if (num <= 0) {
    alert(`Число має бути більше нуля`);
} else {
    let dividers = "";
    for(let i = 1; i <= num; i++) {
        if (num % i == 0) {
            dividers += i + " ";
        }
    }
    alert(`Дільники числа ${num}: ${dividers}`);
}

