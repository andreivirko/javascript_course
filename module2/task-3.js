// "use strict";

// // ============== 1 ===============================================
// // Напиши функцию toPassTests как
// // FUNCTION EXPRESSION (функциональное выражение через переменную)
// // и как ARROW FUNCTION (стрелочная функция),
// // которая выводит пользователю всплывающее окно с сообщением
// // Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!
// // и вызови эту функцию
// // убедись, что функция выполнилась при любом ее выражении

// // // const toPassTests = function() {
// // //     alert('Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!');
// // // }

// // const toPassTests = () => alert('Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!');

// // toPassTests();

// // ============== 2 ===============================================
// // Напиши функцию checkAge как FUNCTION EXPRESSION (функциональное выражение через переменную)
// // и как ARROW FUNCTION (стрелочная функция),
// // которая проверяет значение возраста, которое пользователь ввел в модальное окно
// // и выводит пользователю всплывающее окно с сообщением
// // если возраст равен или более 18, то - Here you are! You are got access!
// // в остальных случаях - Sorry, you can`t to get access
// // и вызови эту функцию
// // убедись, что функция выполнилась при любом ее выражении

// // let tellYourAge;
// // let modalQuestion = "Tell your age please";
// // let msgTrue = "Here you are! You are got access!";
// // let msgFalse = "Sorry, you can`t to get access";

// // const checkAge  = function(tellYourAge) {
// //     tellYourAge = +prompt(modalQuestion);
// //     console.log(tellYourAge);
// //     if (tellYourAge >= 18) {
// //         alert(msgTrue);
// //     } else {
// //         alert(msgFalse);
// //     }
// // } 

// // const checkAge = (tellYourAge) => (tellYourAge = +prompt(modalQuestion) >= 18) ? alert(msgTrue) : alert(msgFalse);

// // checkAge();

// // ============== 3 ===============================================
// // Напиши скрипт подсчета стоимости гравировки украшений.
// // Для этого создай функцию toGetCost(message, pricePerWord)
// // как FUNCTION EXPRESSION и как ARROW FUNCTION
// // принимающую строку (в строке будут только слова и пробелы) и цену гравировки
// // одного слова, и возвращающую цену гравировки всех слов в строке.
// // и вызови эту функцию
// // убедись, что функция выполнилась при любом ее выражении

// // // const toGetCost = function(message, pricePerWord) {
// // //     console.log();
// // //     let words = message.split(" ");
// // //     console.log(words);
// // //     let totalPrice = words.length * pricePerWord;
// // //     return totalPrice;
// // // }

// // const toGetCost = (message, pricePerWord) => (message.split(" ").length *= pricePerWord);

// // console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100
// // console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160
// // console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280
// // console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180

// // ============== 4 ===============================================
// // Напиши функцию logItems(array), которая получает массив и использует цикл for,
// // который для каждого элемента массива будет выводить в консоль сообщение
// // в формате [номер элемента] - [значение элемента].
// // Нумерация должна начинаться с 1. К примеру для первого
// // элемента массива ['Mango', 'Banana', 'Ajax']
// // с индексом 0 будет выведено '1 - Mango',
// // а для индекса 2 выведет '3 - Ajax'.
// // const array = ['Mango', 'Banana', 'Ajax'];

// // const logItems = function(array) {
// //     for (let i = 0; i < array.length; i += 1) {
// //         console.log(`${i + 1} - ${array[i]}`);
// //     }
// // }

// // // Вызовы функции для проверки кода
// // logItems([
// //   "Wolverine",
// //   "Thor",
// //   "Iron Man",
// //   "Deadpool",
// //   "Nick Fury",
// //   "Colossus"
// // ]);

// // logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

// // ============== 5 ===============================================
// // Напиши функцию checkTheWord(message) как FUNCTION EXPRESSION и как ARROW FUNCTION,
// // принимающую 1 параметр message - строку.
// // Функция проверяет ее на содержание слов great и not. Если нашли запрещенное слово
// // то функция возвращает true, если запрещенных слов нет функция возвращает false.
// // Слова в строке могут быть в произвольном регистре.

// // const checkTheWord = function(message) {
    
// //     // variant 1
// //     // if (message.includes("great") || message.includes("not")) {
// //     //     console.log(true);
// //     // } else {
// //     //     console.log(false);
// //     // }
    
// //     // variant 2 - more simple
// //     // if (message.includes("great") || message.includes("not")) {
// //     //     //                  false || false 
// //     //     //                  true  || false
// //     //     //                  false || false
// //     //     return true;
// //     // }
// //     // return false;

// //     // variant 3 - to check the word, not string
// //     let stringToArray = message.split(" ");
// //     console.log(stringToArray);
// //     if (stringToArray.includes("great") || stringToArray.includes("not")) {
// //         //                  false || false 
// //         //                  true  || false
// //         //                  false || false
// //         return true;
// //     }
// //     return false;
// // }

// // Arrow function

// // const checkTheWord = (message) => message.split(" ").includes("great") || message.split(" ").includes("not") ? true : false; 

// // // Вызовы функции для проверки кода

// // variant 1
// // checkTheWord("Than fly to others that we know not of?"); // true

// // variant 2
// // console.log(checkTheWord("Thus conscience does make cowards of us all")); // false
// // console.log(checkTheWord("And enterprises of great pitch and moment")); // true
// // console.log(checkTheWord("And lose the name of notaction")); // false

// // ============== 6 ===============================================
// // Напиши функцию countTestsScore() как FUNCTION EXPRESSION,
// // принимающую при вызове все аргументы в виде псевдомассива arguments,
// // Функция суммирует все полученные аргументы, независимо от их количества при вызове.
// // в переменную totalSum и выводит это значение в консоль

// // const countTestsScore = function() {
// //     let totalSum = 0;
// //     for (let j of arguments) {
// //         totalSum = totalSum + j;
// //         // 0 = 0 + 16
// //         // 16 = 16 + 22
// //         // 38 = 38 + 23
// //         console.log("sum of elements on each iteration", totalSum);
// //     } 
// //     return console.log(totalSum);
// // }

// // // Вызовы функции для проверки кода
// // countTestsScore(16, 22, 23); // 61
// // countTestsScore(15, 20, 22, 20); // 77
// // countTestsScore(14, 19, 21, 20, 23); // 97

// // const checkYear = function() {
// //     let year = 2004;
// //     for (let j of arguments) {
// //         year += 1;
// //         // 0 = 0 + 16
// //         // 16 = 16 + 22
// //         // 38 = 38 + 23
// //         console.log("sum of elements on each iteration", year);
// //     } 
// //     return console.log(year);
// // }

// // // Вызовы функции для проверки кода
// // checkYear(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15); // 61

// // ============== 8 ===============================================
// // Объяви функцию homeworkIsDone как FUNCTION EXPRESSION
// // в качестве параметров она принимает переменную pass,
// // которая принимает значение через модальное окно от преподавателя
// // и homework, который принимает следующие значения:
// // если преподаватель ввел значение 1, то homework принимает сообщение homework is done!,
// // иначе - "You must to pass the homework!"
// // в результате, функция должна вывести в консоль подходящее значение homework

// let pass;
// let homework;
// let modalQuestion1 = "enter the number please";


// // const homeworkIsDone = function(pass, homework) {
// //     pass = prompt(modalQuestion1); 
// //     if (pass == true) {  // only string 1 can return true , another numbers and each values return false
// //         homework = "homework is done!";
// //         alert(homework);
// //     } else {
// //         homework = "You must to pass the homework!";
// //         alert(homework);
// //     }

// // }

// // ============== 9 ===============================================
// // Преобразуй объявление функции FUNCTION EXPRESSION из задания 1 в ARROW FUNCTION
// // с использованием тернарного оператора вместо ветвления

// const homeworkIsDone = (pass) => pass = prompt(modalQuestion1) == true ? alert("homework is done!") : alert("You must to pass the homework!");

// homeworkIsDone();


