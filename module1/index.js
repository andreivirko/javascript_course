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








