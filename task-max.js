'use strict';

//max-1
alert(`Загадай число від 0 до 100`);
let min = 0;
let max = 100;
let riddledNum;
let found = false;

while (!found) {
    riddledNum = Math.floor((min + max) / 2);
    if ( confirm(`Ваше число > ${riddledNum}?`) ) {
        min = riddledNum;
    } else if ( confirm(`Ваше число < ${riddledNum}?`) ) {
        max = riddledNum;
    } else {
        alert(`Тоді ваше загадане число = ${riddledNum}!`);
        found = true;
    }
}

//max-2
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 11; j++) {
        let d = i * j;
        console.log(i+"*"+j+"="+d);
    }
}

//max-3
alert(`Мені потрібна дата, а я повідомлю яка буде наступна.`)
let day = Number(prompt(`Введіть день (1-31):`));
let month = Number(prompt(`Введіть місяць (1-12):`));
let year = Number(prompt(`Введіть рік:`));
let daysInMonth;

switch (month) {
  case 1: 
  case 3: 
  case 5: 
  case 7: 
  case 8: 
  case 10: 
  case 12: 
    daysInMonth = 31;
    break
  case 4: 
  case 6: 
  case 9: 
  case 11: 
    daysInMonth = 30;
    break
  case 2:
    daysInMonth = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28);
    break
}

day = day + 1;

if ( day > daysInMonth ) {
    month += 1;
    day = 1;
   
} 
if ( month > 11 ) {
    month = 1;
    year += 1;
}
let nextDate = `${day}` + "." + `${month}` + "." + `${year}`;
alert(`Наступна дата буде ${nextDate}`);