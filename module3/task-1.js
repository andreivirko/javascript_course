"use strict";

// ==================== 1 ========================
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'coding'
// заменяет значение premium на false
// выводит с помощью функции toShowUpdatedUser(obj) содержимое переданного ей
// объекта user, в формате пар (ключ:значение), используя Object.keys() и for...of

const user = {
    name: "Semen",
    age: 15,
    hobby: "html",
    premium: true,
  };
  
user.mood = "happy";
user.hobby = "coding";
user.premium = false;

const toShowUpdatedUser = function(user1) {
    const massiveKeys = Object.keys(user1);
    
    for (const user2 of massiveKeys) {
        console.log(`${user2}: ${user1[user2]}`);
    }
}

toShowUpdatedUser(user);

// ==================== 2 ========================
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.// Вызовы функции для проверки работоспособности твоей реализации.

const countProps = function(obj) {
    const countMassive = [Object.keys(obj)];
    return countMassive.length;
}

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3


// ==================== 3 ========================

// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
      console.log(`${[i + 1]} - ${array[i]}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ==================== 4 ========================

// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
// принимающую строку (в строке будут только слова и пробелы) 
// и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.


const calculateEngravingPrice = function(message, pricePerWord) {
    const arrayMessage = message.split(" "); // преобразовали полученую при вызове функции строку в массив по разделителю пробел
    // console.log(arrayMessage); 
    let wordCount = arrayMessage.length; // узнаем количество слов путем применения свойства length к массиву который преобразщвали в нашу строку
    // console.log(wordCount);
    let sum = pricePerWord * wordCount; // вычесляем сумму заказа 
    // console.log(sum);
    return sum;
};



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',
10,
),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120


// ============== 5 ===============================================
// Напиши функцию checkTheWord(message) как FUNCTION EXPRESSION и как ARROW FUNCTION,
// принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов great и not. Если нашли запрещенное слово
// то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.
// Вызовы функции для проверки кода

const checkTheWord = function(message) {
    let a = message.split(" ");
    if (a.includes("great") || a.includes("not")) {
        return true;
    } else {
        return false;
    }
}

// const checkTheWord = (message) => message.split(" ").includes("great") || message.split(" ").includes("not") ? true : false

console.log(checkTheWord("Than fly to others that we know not of?")); // true
console.log(checkTheWord("Thus conscience does make cowards of us all")); // false
console.log(checkTheWord("And enterprises of great pitch and moment")); // true
console.log(checkTheWord("And lose the name of action")); // false

// ============== 6 ===============================================
// Напиши функцию countTestsScore() как FUNCTION EXPRESSION,
// принимающую при вызове все аргументы в виде псевдомассива arguments,
// Функция суммирует все полученные аргументы, независимо от их количества при вызове.
// в переменную totalSum и выводит это значение в консоль

const countTestsScore = function() {
    let totalSum = 0;
    for (const argument of arguments) {
        totalSum = totalSum + argument;
    }
    return console.log(totalSum);
}

// // Вызовы функции для проверки кода

countTestsScore(16, 22, 23); // 61
countTestsScore(15, 20, 22, 20); // 77
countTestsScore(14, 19, 21, 20, 23); // 97






