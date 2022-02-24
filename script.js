console.log(1.15 + 2.3);

let a = "";
for (let i = 0; i < 6; i++) {
    a += "*";
    console.log(a);

}

for (let i = 0; i < 101; i++) {
    if (i % 3 === 0) {
        console.log("Fizz")
    } else console.log(i)


    if (i % 5 === 0) {
        console.log("Buzz")
        console.log(i)
    } else console.log(i)
}

for (let i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz")
    }
    console.log(i);
}

console.log(60 * 60);

result = prompt("Введите ваше имя");
alert("Ваше имя " + result);

let str = "abcde";
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

var obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
console.log('Заработная плата Пети:');
console.log(obj['Петя']);
console.log('Заработная плата Коли:');
console.log(obj['Коля']);

let arr = [2, 5, 3, 9];
let result1 = (arr[0] * arr[1]) + (arr[2] * arr[3]);
console.log(result1);

let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr1[1][0]);

min = prompt("Введите число до 59")
if (min >= 0 && min <= 14) {
    console.log('Число попадает в первую четверть');
}
if (min >= 15 && min <= 29) {
    console.log('Число попадает во вторую четверть');
}
if (min >= 30 && min <= 44) {
    console.log('Число попадает в третью четверть');
}
if (min >= 45 && min <= 60) {
    console.log('Число попадает в четвёртую четверть');
};


let number1 = 1
if (number1 > 0) {
    console.log('Верно')
} else console.log('Неверно')

let number2 = 0
if (number2 > 0) {
    console.log('Верно')
} else console.log('Неверно')

let number3 = -3
if (number3 > 0) {
    console.log('Верно')
} else console.log('Неверно')

let test = 'true'
if (test === 'true') {
    console.log('Верно')
} else console.log('Неверно')

let test1 = 'false'
if (test1 === 'true') {
    console.log('Верно')
} else console.log('Неверно')

let num = 1
switch (num) {
    case 1:
        let result2 = 'Зима'
        console.log(result2)
        break;
    case 2:
        let result3 = 'Весна'
        console.log(result3)
        break;
    case 3:
        let result4 = 'Лето'
        console.log(result4)
        break;
    case 4:
        let result5 = 'Осень'
        console.log(result5)
        break;
}

let arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2; i++) {
    console.log(arr[i]);
}

let a1 = 10;
let b1 = 3;
console.log(a1 % b1);

console.log(Math.pow(2, 10));

console.log(Math.sqrt(379).toFixed(0));
console.log(Math.sqrt(379).toFixed(1));
console.log(Math.sqrt(379).toFixed(2));

console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

console.log(Math.random(100).toFixed(0));

let str1 = 'aaa bbb ccc';
console.log(str1.substr(4, 3));
console.log(str1.substring(4, 7));
console.log(str1.slice(4, 7));

let str2 = 'js';
console.log(str2.toUpperCase());

let str3 = 'я учу javascript!';
console.log(str3.length);

let str4 = "я учу javascript!";
console.log(str4.indexOf('учу'));

let str5 = "Я-учу-javascript!";
console.log(str5.replace(/-/gi, "!"));

let str6 = "я учу javascript!";
console.log(str6.split(" ", ));

let arr3 = ['я', 'учу', 'javascript', '!'];
console.log(arr3.join('+'));

let str7 = 'я учу javascript!';
console.log(str7[0].toUpperCase() + ' ' + str7.slice(2, 18));