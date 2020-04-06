"use strict";

// ============== 1 ===============================================
// Напиши функцию toPassTests как
// FUNCTION EXPRESSION (функциональное выражение через переменную)
// и как ARROW FUNCTION (стрелочная функция),
// которая выводит пользователю всплывающее окно с сообщением
// Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении

// // const toPassTests = function() {
// //     alert('Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!');
// // }

// const toPassTests = () => alert('Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!');

// toPassTests();

// ============== 2 ===============================================
// Напиши функцию checkAge как FUNCTION EXPRESSION (функциональное выражение через переменную)
// и как ARROW FUNCTION (стрелочная функция),
// которая проверяет значение возраста, которое пользователь ввел в модальное окно
// и выводит пользователю всплывающее окно с сообщением
// если возраст равен или более 18, то - Here you are! You are got access!
// в остальных случаях - Sorry, you can`t to get access
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении

// let tellYourAge;
// let modalQuestion = "Tell your age please";
// let msgTrue = "Here you are! You are got access!";
// let msgFalse = "Sorry, you can`t to get access";

// // const checkAge  = function(tellYourAge) {
// //     tellYourAge = +prompt(modalQuestion);
// //     console.log(tellYourAge);
// //     if (tellYourAge >= 18) {
// //         alert(msgTrue);
// //     } else {
// //         alert(msgFalse);
// //     }
// // } 

// const checkAge = (tellYourAge) => (tellYourAge = +prompt(modalQuestion) >= 18) ? alert(msgTrue) : alert(msgFalse);

// checkAge();

// ============== 3 ===============================================
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию toGetCost(message, pricePerWord)
// как FUNCTION EXPRESSION и как ARROW FUNCTION
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки
// одного слова, и возвращающую цену гравировки всех слов в строке.
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении

// // const toGetCost = function(message, pricePerWord) {
// //     console.log();
// //     let words = message.split(" ");
// //     console.log(words);
// //     let totalPrice = words.length * pricePerWord;
// //     return totalPrice;
// // }

// const toGetCost = (message, pricePerWord) => (message.split(" ").length *= pricePerWord);

// console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100
// console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160
// console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280
// console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180