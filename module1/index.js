"use strict";

var oldVariable = "эта переменая использивалась до стандарта ES5";
console.log(oldVariable);

// console.log(newVar); // Uncaught ReferenceError: Cannot access 'newVar' before initialization
let newVar; // это объявление переменной
console.log(newVar); // undefined потому что переменная объявлена без значения 
newVar = 20; // здесь мы пресвоели значение объявленой выше переменной
console.log(newVar); // этой командой мы выводим значение переменной указаной в () переменной

newVar = "helloworld";
console.log(newVar);

const constanta = "constanta"; // эту переменною всегда нужно объявлять с пресвоеным значением
console.log(constanta);

// constanta = "byeworld"; перезаписать значение этой переменной нельзя
console.log(constanta);

// Number
let a = 4;
console.log(a);
console.log(typeof a);
a = NaN;
console.log(a);
console.log(typeof a);
a = Infinity;
console.log(a);
console.log(typeof a);

// String
a = "javascript";
console.log(a);
console.log(typeof a);

// Boolean
a = true;
console.log(a);
console.log(typeof a);

// Boolean
a = false;
console.log(a);
console.log(typeof a);

// Object!!!!!
a = null;
console.log(a);
console.log(typeof a);

// Undefined
a = undefined;
console.log(a);
console.log(typeof a);

// isNaN
let validNumber = 3;
console.log(typeof validNumber); // Number 
console.log(isNaN(validNumber)); // false потому что это дейсвительно число
validNumber = "3";
console.log(typeof validNumber); // String
console.log(isNaN(validNumber)); // false потому что это дейсвительно число
validNumber = "abc";
console.log(typeof validNumber); // String
console.log(isNaN(validNumber)); // true потому что не число

// parseInt parseFloat methods
console.log(Number.parseInt('112px')); // 112
console.log(Number.parseInt("11abc22")); // 11
console.log(Number.parseInt("2.15xyz23")); // 2
console.log(Number.parseInt("efg23")); // NaN

console.log(Number.parseFloat("112px")); // 112
console.log(Number.parseFloat("11abc22")); // 11
console.log(Number.parseFloat("2.15xyz23")); // 2.15
console.log(Number.parseFloat("efg23")); // NaN

// Математические операторы
let x = 5;
let y = 3;
let z = 6;
console.log(x + y); // 5 + 3 = 8
console.log(x - y); // 5 - 3 = 2
console.log(x * y); // 5 * 3 = 15
console.log(x ** y); // 5 * 5 * 5 = 125
console.log(x / y); // 5 / 3 = 1.6666666666666667
console.log(x % y); // 2
console.log(z % y); // 0
console.log(z % x); // 1

console.log(x + y * z); // 23
console.log((x + y) * z); // 48

console.log(x + y ** z); // 734
console.log((x + y) ** z); // 262144

let value = 23;
value = value + 7;
console.log(value);

value = value + 7;
console.log(value);

value = value + 7;
console.log(value);

value += 7;
console.log(value);

// Операторы сровнения 

let p = 1;
let r = 2;
let s = 1;
console.log(p > r); // false 
console.log(r > p); // true
console.log(p >= s); // true
console.log(p <= s); // true

console.log(3 > 2 > 1); // false
console.log(3 > 2 >= 1); // true

// Приведение типов
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("0")); // 0
console.log(Number("1")); // 1
console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean("0")); // true
console.log(Boolean("1")); // true
console.log(Boolean("3")); // true
console.log(Boolean("abc")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); // fasle
console.log(Boolean(Infinity)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(String(0)); // "0"
console.log(String(1)); // "1"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"
console.log(String(null)); // null
console.log(String(undefined)); // Undefined

// Строгое равенство и не равенство
console.log(3 > 2 === 1); // false
console.log(3 > 2 == 1); // true
console.log(false === 0); // false
console.log(false == 0); // true
console.log(true === 1); // false
console.log(true == 1); // true

console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false

let newString = "hi my name is Andrei!";
console.log(newString);
console.log(newString.length)
console.log(newString.indexOf("hi")); // 0
console.log(newString.indexOf("my")); // 3
console.log(newString.indexOf("Andrei")); // 14
console.log(newString.indexOf("Andrei!")); // 14
console.log(newString.indexOf("hello world")); // -1
console.log(newString.indexOf("my  name")); // -1

console.log(newString.includes("my")); // true
console.log(newString.includes("me")); // true
console.log(newString.includes("mo")); // false

console.log(newString[0]); // h
console.log(newString[1]); // i
console.log(newString[2]); // space
console.log(newString[5]); // space
console.log(newString[30]); // undefined

console.log(newString.toLocaleUpperCase());
console.log(newString.toLocaleLowerCase());

const myName = "my " + "name " + "is " + "Andrei!";
console.log(myName);

const myFirstName = "Andrei";
const myLastName = "Virko";

// интерполяция и шаблоная строка
let fullName;
fullName = `${myFirstName} ${myLastName}`;
console.log(fullName);

fullName = "${myFirstName} ${myLastName}";
console.log(fullName);

let num1 = 3;
console.log(typeof num1);

let str1 = "3";
console.log(typeof str1);

let result;
result = num1 + str1;
console.log(result);
console.log(typeof result);

let num2 = 5;
let str2 = "5";

result = num1 + num2 + str1 + str2;
console.log(result); // 835
console.log(typeof result);

result = num1 + str1 + num2 + str2;
console.log(result); // 3355
console.log(typeof result);

let num3 = 10;
console.log(typeof num3); // number
result = 10 + ""; 
console.log(result); // 10 
console.log(typeof result); // string

console.log(typeof String(num3));
let str3 = "5";
result = + str3;
console.log(result);
console.log(typeof result);
console.log( typeof Number(str3));