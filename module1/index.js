"use strict";

// var oldVariable = "эта переменая использивалась до стандарта ES5";
// console.log(oldVariable);

// // console.log(newVar); // Uncaught ReferenceError: Cannot access 'newVar' before initialization
// let newVar; // это объявление переменной
// console.log(newVar); // undefined потому что переменная объявлена без значения 
// newVar = 20; // здесь мы пресвоели значение объявленой выше переменной
// console.log(newVar); // этой командой мы выводим значение переменной указаной 
// // в () переменной

// newVar = "helloworld";
// console.log(newVar);

// const constanta = "constanta"; // эту переменною всегда нужно объявлять с пресвоеным
// // значением
// console.log(constanta);

// // constanta = "byeworld"; перезаписать значение этой переменной нельзя
// console.log(constanta);

// // Number
// let a = 4;
// console.log(a);
// console.log(typeof a);
// a = NaN;
// console.log(a);
// console.log(typeof a);
// a = Infinity;
// console.log(a);
// console.log(typeof a);

// // String
// a = "javascript";
// console.log(a);
// console.log(typeof a);

// // Boolean
// a = true;
// console.log(a);
// console.log(typeof a);

// // Boolean
// a = false;
// console.log(a);
// console.log(typeof a);

// // Object!!!!!
// a = null;
// console.log(a);
// console.log(typeof a);

// // Undefined
// a = undefined;
// console.log(a);
// console.log(typeof a);

// // isNaN
// let validNumber = 3;
// console.log(typeof validNumber); // Number 
// console.log(isNaN(validNumber)); // false потому что это дейсвительно число
// validNumber = "3";
// console.log(typeof validNumber); // String
// console.log(isNaN(validNumber)); // false потому что это дейсвительно число
// validNumber = "abc";
// console.log(typeof validNumber); // String
// console.log(isNaN(validNumber)); // true потому что не число

// // parseInt parseFloat methods
// console.log(Number.parseInt('112px')); // 112
// console.log(Number.parseInt("11abc22")); // 11
// console.log(Number.parseInt("2.15xyz23")); // 2
// console.log(Number.parseInt("efg23")); // NaN

// console.log(Number.parseFloat("112px")); // 112
// console.log(Number.parseFloat("11abc22")); // 11
// console.log(Number.parseFloat("2.15xyz23")); // 2.15
// console.log(Number.parseFloat("efg23")); // NaN

// // Математические операторы
// let x = 5;
// let y = 3;
// let z = 6;
// console.log(x + y); // 5 + 3 = 8
// console.log(x - y); // 5 - 3 = 2
// console.log(x * y); // 5 * 3 = 15
// console.log(x ** y); // 5 * 5 * 5 = 125
// console.log(x / y); // 5 / 3 = 1.6666666666666667
// console.log(x % y); // 2
// console.log(z % y); // 0
// console.log(z % x); // 1

// console.log(x + y * z); // 23
// console.log((x + y) * z); // 48

// console.log(x + y ** z); // 734
// console.log((x + y) ** z); // 262144

// let value = 23;
// value = value + 7;
// console.log(value);

// value = value + 7;
// console.log(value);

// value = value + 7;
// console.log(value);

// value += 7;
// console.log(value);

// // Операторы сровнения 

// let p = 1;
// let r = 2;
// let s = 1;
// console.log(p > r); // false 
// console.log(r > p); // true
// console.log(p >= s); // true
// console.log(p <= s); // true

// console.log(3 > 2 > 1); // false
// console.log(3 > 2 >= 1); // true

// // Приведение типов
// console.log(Number("")); // 0
// console.log(Number(" ")); // 0
// console.log(Number("0")); // 0
// console.log(Number("1")); // 1
// console.log(Number(false)); // 0
// console.log(Number(true)); // 1
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN

// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true
// console.log(Boolean("0")); // true
// console.log(Boolean("1")); // true
// console.log(Boolean("3")); // true
// console.log(Boolean("abc")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(NaN)); // fasle
// console.log(Boolean(Infinity)); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

// console.log(String(0)); // "0"
// console.log(String(1)); // "1"
// console.log(String(NaN)); // "NaN"
// console.log(String(Infinity)); // "Infinity"
// console.log(String(null)); // null
// console.log(String(undefined)); // Undefined

// // Строгое равенство и не равенство
// console.log(3 > 2 === 1); // false
// console.log(3 > 2 == 1); // true
// console.log(false === 0); // false
// console.log(false == 0); // true
// console.log(true === 1); // false
// console.log(true == 1); // true

// console.log(!true); // false
// console.log(!false); // true
// console.log(!0); // true
// console.log(!1); // false

// let newString = "hi my name is Andrei!";
// console.log(newString);
// console.log(newString.length)
// console.log(newString.indexOf("hi")); // 0
// console.log(newString.indexOf("my")); // 3
// console.log(newString.indexOf("Andrei")); // 14
// console.log(newString.indexOf("Andrei!")); // 14
// console.log(newString.indexOf("hello world")); // -1
// console.log(newString.indexOf("my  name")); // -1

// console.log(newString.includes("my")); // true
// console.log(newString.includes("me")); // true
// console.log(newString.includes("mo")); // false

// console.log(newString[0]); // h
// console.log(newString[1]); // i
// console.log(newString[2]); // space
// console.log(newString[5]); // space
// console.log(newString[30]); // undefined

// console.log(newString.toLocaleUpperCase());
// console.log(newString.toLocaleLowerCase());

// const myName = "my " + "name " + "is " + "Andrei!";
// console.log(myName);

// const myFirstName = "Andrei";
// const myLastName = "Virko";

// // интерполяция и шаблоная строка
// let fullName;
// fullName = `${myFirstName} ${myLastName}`;
// console.log(fullName);

// fullName = "${myFirstName} ${myLastName}";
// console.log(fullName);

// let num1 = 3;
// console.log(typeof num1);

// let str1 = "3";
// console.log(typeof str1);

// let result;
// result = num1 + str1;
// console.log(result);
// console.log(typeof result);

// let num2 = 5;
// let str2 = "5";

// result = num1 + num2 + str1 + str2;
// console.log(result); // 835
// console.log(typeof result);

// result = num1 + str1 + num2 + str2;
// console.log(result); // 3355
// console.log(typeof result);

// let num3 = 10;
// console.log(typeof num3); // number
// result = 10 + ""; 
// console.log(result); // 10 
// console.log(typeof result); // string

// console.log(typeof String(num3));
// let str3 = "5";
// result = + str3;
// console.log(result);
// console.log(typeof result);
// console.log( typeof Number(str3));

// // взимодействие с пользаватилем спливающие окна
// const hi = "hello";
// let student = "bye";
// // const message = prompt(`${hi} ${student}`);
// // console.log(message);
// // console.log(typeof message);

// // const message1 = alert("what is going on");
// // console.log(message1);
// // console.log(typeof message1);

// // const message2 = confirm("what are you doing");
// // console.log(message2);
// // console.log(typeof message2);

// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// // методы обьекта math
// console.log(Math.floor(2.1)); // 2
// console.log(Math.floor(2.5)); // 2
// console.log(Math.floor(2.9)); // 2

// console.log(Math.ceil(2.1)); // 3
// console.log(Math.ceil(2.5)); // 3
// console.log(Math.ceil(2.9)); // 

// console.log(Math.round(2.1)); // 2
// console.log(Math.round(2.5)); // 3
// console.log(Math.round(2.9)); // 3

// console.log(Math.max(1, 2, 3, 10)); // 10
// console.log(Math.max(1, 1000, 20, 300,)); // 1000

// console.log(Math.min(1, 2, 3, 10)); // 1
// console.log(Math.min(1, 1000, 20, 300,)); // 1

// console.log(Math.pow(2, 3)); // 8
// console.log(Math.pow(2, 2)); // 4
// console.log(Math.pow(2, 1)); // 2

// console.log(Math.random()); // number changes all th time
// console.log(Math.random() * (2 - (-1)) - 1);
// console.log(Math.floor(Math.random() * (2 - (-1)) - 1)); // numbers betwwen -1, 2

// // логический оператор
// const KPI = 30;
// let fact = KPI > 20 && KPI < 31;
// //               true && true
// console.log(fact); // true

// console.log("cat" && "dog" && "parrot"); // parrot
// //           true && true && true 
// // will only show the last value

// fact = KPI > 20 && KPI < 29;
// //         true && false
// console.log(fact); // false
// console.log("cat" && false); // false 

// fact = KPI > 31 && KPI < 32;
// //        false && true
// console.log(fact); // false

// console.log(false && "parrot"); // false 


// const age = 15;
// let trueAge = age < 16 || age > 14;
// //                true || true 
// console.log(trueAge); // true
// console.log("cat" || "parrot"); // cat

// trueAge = age < 16 || age > 17;
// //            true || false 
// console.log(trueAge); // true

// trueAge = age < 15 || age > 14;
// //           false || true
// console.log(trueAge); // true

// trueAge = age < 15 || age > 15;
// //           false || false
// console.log(trueAge); // false


// console.log(!true); // false 
// console.log(!false); // true

// console.log(!!true); // true
// console.log(!!false); // false

// console.log(!1); // false
// console.log(!!1); // true

// console.log(!"cat") // false
// console.log(!""); // true 

// console.log(false && true || true); // true
// console.log(false && (true || true)); // false 

// занятие 3

// let age = 22;

// // простейшая инструкция if

// if (age > 18) {
//     console.log("you're an adult");
// }

// // if выполнит код внури {} только если условие внутри () вернет true

// // инструкция if...else

// if (age > 18) {
//     console.log("you're an adult");
// } else {
//     console.log("you're so young");
// }

// // if...else выполнит код внутри {} после if, только если его условие внутри () вернет 
//true
// // если условие вернет  false, то выполниться код внутри {} else

// // тернарный оператор 

// let a = age > 18 ? "you're an adult" : "you're so young";
// console.log(a);

// // инструкция  else if

// // пример условия с логическим оператором И

// if (age > 18) {
//     console.log("you're an adult");
// } else if (age < 18 && age > 14) {
//     console.log("you're a teenager");
// } else if (age < 14 && age > 7) {
//     console.log("you're a child");
// } else {
//     console.log("you're a baby");
// }

// // пример условия с логическим оператором ИЛИ

// let day = prompt("enter the date plz");
// let weekDay;

// if (day == "saturday" || day == "sunday") {
//     weekDay = "holiday";
// } else if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
//     weekDay = "workday";
// } else {
//     weekDay = "invalid enter data";
// } 

// console.log(day);
// console.log(weekDay);

// // код выполниться в той инструкции, где условие этой инструкции возвращает true,
// // иначе выполнится код внутри {} else, потому что в нем нет условия 

// // оператор switch

// switch (day) {
//     case "monday":
//         weekDay = "workday";
//         break;
    
//     case "tuesday":
//         weekDay = "workday";
//         break;

//     case "wednesday":
//         weekDay = "workday";
//         break;

//     case "thursday":
//         weekDay = "workday";
//         break;

//     case "friday":
//         weekDay = "workday";
//         break;

//     case "saturday":
//         weekDay = "holiday"
//         break;

//     case "sunday":
//         weekDay = "holiday"
//         break;
        
//     default: 
//         weekDay = "invalid enter data";
// }

// // сокращенная версия свича для вариантов с одинаковами ответами

// switch (day) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         weekDay = "workday";
//         break;

//     case "saturday":
//     case "sunday":
//         weekDay = "holiday"
//         break;
        
//     default: 
//         weekDay = "invalid enter data";
// }

// console.log(weekDay);

// // тернарний оператор, как альтернатива if...else

// let answer;
// let question = confirm("are you a student?");
// console.log(question);

// if (question === true) {
//     answer = "yes";
// } else {
//     answer = "no";
// }

// answer = question === true ? "yes" : "no";

// искомая переменная = условие ? ответ если условие true : ответ если условие false

// console.log(answer);

// // ОБЛАСТЬ ВИДИМОСТИ === variable scope 
// // Global scope 

let mySimpleName = "Andrei"; // эта переменная объявлена глобально
console.log("GLOBAL SCOPE: ", mySimpleName);

if (true) {
    console.log("block scope: ", mySimpleName); // глобальная переменная видна внутри блока 
    //тоже 
}

if (true) {
    let mySecondName = "Virko"; // блочная (локальная) переменная видна только внутри 
    //своего блока и дочерних (вложеных) блоков 
    console.log("block scope: ", mySecondName);
}

// console.log("GLOBAL SCOPE: ", mySecondName); // блочная переменная НЕ ВИДНА ГЛОБАЛЬНО,
// т.е. за пределами своего блока

// // цикл

let counter = 0;

// цикл с предусловием
// сначала проверяеться условие и если оно true, то выполнится тело цикла {}

while (counter <= 10) {
    console.log("counter: ", counter);
    counter += 2;
}

let counter1 = 1;

// цикл с постусловием
// сначала выполнится тело цикла, потом только проверится условие, и если оно false,
// то следующая итерация не произойдет 

// do {
//     console.log("counter-1: ", counter1);
//     counter1 += 2;
// } while (counter1 < 1);

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//     console.log("clientCounter: ", clientCounter);
//     clientCounter += 1;
// } 

// do {
//     console.log("clientCounter1: ", clientCounter);
//     clientCounter += 1;
// } while (clientCounter <= maxClients);

// let minScore = 15;
// let maxScore = 21;

// while (minScore <= maxScore) {
//     console.log("minScore: ", minScore);
//     minScore += 1;
// }

// do {
//     console.log("minScore1: ", minScore);
//     minScore += 1;
// } while (minScore <= maxScore)

// цикл со счетчиком

const max = 23;
// цикл for обязательно содержит 3 элемента условия 
// 1: инициализация счетчика (точка отсчета)
// 2: собственно само условие
// 3: шаг итерации (какие элементы мы должны проверять: каждый 1й, 2й и т.д.)
for (let i = 10; i < max; i += 3) {
    console.log(i);
}