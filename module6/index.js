"use strict";

// ИМПЕРАТИВНЫЙ КОД - заданная последовательность инструкций (циклы)

// ДЕКЛАРАТИВНЫЙ КОД - описание желаемого результата, а не последовательности действийы
// (команды и функции)

// imperative vs declarative

// imperative

const array = [1, 2, 4, 8, 27, 23, 21];
const filterArray = [];

for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 3) {
        filterArray.push(array[i]);
    };
};
console.log("imperative", filterArray);

// declarative

const filteredNumber = array.filter((value) => {return value > 3});
console.log("declarative", filteredNumber);

// Чистые функции

// Функция с побочными эффектами — функция, которая в процессе
// выполнения может модифицировать или использовать значения
// глобальных переменных, изменять ссылочные аргументы, выполнять
// операции ввода-вывода и т. п.

// imperative

const dirtyMultiply = (arr, value) => {
    for (let j = 0; j < arr.length; j += 1) {
        // arr[j] *= value; 
        arr[j] = arr[j] * value
    };
};

dirtyMultiply(array, 5);
console.log("измененный исходный массив", array);

// измененный исходный массив
// Чистые функции (pure functions) — функции, результат которых
// зависит только от значений переданных аргументов и стабильных
// переменных локальной области видимости, которые при одинаковых
// аргументах всегда возвращают один и тот же результат, и не имеют
// видимых побочных эффектов, то есть не изменяют состояние программы.

const cleanMultiply = (arr, value) => {
    const result = [];
    for (let k = 0; k < arr.length; k += 1) {
        result.push(arr[k] * value);
    };
    return result;
};

console.log("новый массив в результате выполнения функции", cleanMultiply(array, 5));
console.log("не изменившийся исходный массив", array);

// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА

// В JavaScript есть методы массивов пришедшие из функциональных языков.
// Они получают исходный массив, создают новый пустой массив и заполняют
// его, применяя к копии значения каждого элемента указанную
// callback-функцию.

// Все функциональные методы массивов имеют схожий синтаксис.
// Исходный массив array, вызов метода method и callback-функция
// callback в качестве аргумента метода.

// array.method(callback[currentValue, index, array]);

// В большинстве методов, аргументами callback-функции являются
// значение элемента currentValue (первый параметр), позиция элемента
// index (второй параметр) и сам исходный массив array (третий параметр).

// array.method((item, idx, arr) => {
//     // логика которая будет применяться на каждой итерации
//   });

// Все параметры кроме значения элемента item необязательны. Названия
// параметров могут быть любые, но есть неофициальные соглашения.

// array.method(item => {
//     // логика которая будет применяться на каждой итерации
//   });

// === Array.prototype.forEach() === замена цикла for
// ничего не возвращает, просто перебирает коллекцию.

// array.forEach(callback[currentValue, index, array])
// Перебирает
// Может изменять
// Не возвращает

const arrNumber = [1, 4, 3, 14, 16, 2, 90];
for (let i = 0; i < arrNumber.length; i += 1) {
    console.log(arrNumber[i]);
};
// Функциональный forEach
arrNumber.forEach((num) => console.log("forEach", num));

// Указываем параметр idx если нужен доступ к счетчику
arrNumber.forEach((num, idx) => console.log(`forEach: index ${idx}, value ${num}`));

// === Array.prototype.map() ===
// Используется для транформации массива.
// Применяет callback-функцию к каждому элементу исходного массива,
// результат работы callback-функции записывает в новый массив,
// который и будет результатом выполнения метода. Исходный и новый
// массив всегда имеют одинаковую длину. Не мутирует иходный массив.

// array.map(callback[currentValue, index, array])
// Используется для трансформации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию

// example 1

const doubleNumbers = arrNumber.map((num) => num * 2);
console.log("map:", doubleNumbers);
console.log("initial array:", arrNumber);

// example 2

const users = [
    {
        name: "jack",
        isActive: true,
    },
    {
        name: "john",
        isActive: false,
    },
    {
        name: "Susan",
        isActive: true,
    },
];

const names = users.map((user) => user.name);
console.log("map:", names);

// === Array.prototype.filter() ===
// Применяет callback-функцию к каждому элементу исходного массива и если результат
//  ее выполнения имеет значение true, то копирует значение из исходного массива в новый массив. 
// Исходный и новый массив могут иметь разную длину. Не мутирует иходный массив. Всегда возвращает 
// массив, даже если в нем всего 1 элемент. Если ничего не найдено, вернет пустой массив. 
// Используется когда необходимо найти более одного элемента в коллекции.

// array.filter(callback[currentValue, index, array])
// Используется для фильтрации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию

// example 1 

const filteredArray = arrNumber.filter((num) => num > 5);
console.log("filter:", filteredArray);

const filteredArray1 = arrNumber.filter((num) => num < 5);
console.log("filter:", filteredArray1);

const filteredArray2 = arrNumber.filter((num) => num === 5);
console.log("filter:", filteredArray2);

// example 2

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.

const activeUsers = users.filter((user) => user.isActive);
console.log("filter:", activeUsers);

const inActiveUsers = users.filter((user) => !user.isActive);
console.log("filter:", inActiveUsers);

// === Array.prototype.find() ===

// будет искать до первого совпадения,
// после чего прервет свое выполнение.

// Применяет callback-функцию к каждому элементу исходного массива и если результат ее 
// выполнения имеет значение true, то возвращает этот элемент и завершает свое выполнение. 
// Если ничего не найдено, вернет undefined.

// array.find(callback[currentValue, index, array])

// Используется для поиска уникального элемента массива
// Перебирает
// Не изменяет
// Возвращает элемент

// example 1 

const nextToFive = arrNumber.find((num) => num > 5);
console.log("find:", nextToFive); // 14

const beforeFive = arrNumber.find((num) => num < 5);
console.log("find:", beforeFive); // 1

const five = arrNumber.find((num) => num === 5);
console.log("find:", five); // undefined

// example 1 

const newUsers = [
    { id: '000', name: 'Mango', isActive: true },
    { id: '001', name: 'Poly', isActive: false },
    { id: '002', name: 'Ajax', isActive: true },
    { id: '003', name: 'Chelsey', isActive: false },
];

const user = newUsers.find((user) => user.id === "002")
console.log(user); // {id: "002", name: "Ajax", isActive: true}

const getUserById = (array, id) => array.find((obj) => obj.id === id);
console.log(getUserById(newUsers, "003")); // {id: "003", name: "Chelsey", isActive: false}
console.log(getUserById(newUsers, "01")); // undefined

// === Array.prototype.every(), Array.prototype.some() ===

// === Array.prototype.every(), Array.prototype.some() ===Метод every проверяет, 
// прошли ли все элементы массива тест, предоставляемый callback-функцией. Возвращает true, 
// если вызов callback-функции вернет true для каждого элемента в array
// array.every(callback[currentValue, index, array])
// Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест,
//  предоставляемый callback-функцией. Возвращает true, если вызов callback-функции 
// вернет true хотябы для одного элемента в array.
// array.some(callback[(currentValue, index, array)]);
// Перебирает
// Не изменяет
// Возвращает true или false

// example 1

const sumNums = [1, 20, 31, 4, 500];
const isBig = (val) => val >= 10;
console.log(sumNums.every(isBig)); // false
console.log(sumNums.some(isBig)); // true

const isBig1 = (val) => val >= 1;
console.log(sumNums.every(isBig1)); // true
console.log(sumNums.some(isBig1)); // true

const isBig2 = (val) => val >= 501;
console.log(sumNums.every(isBig2)); // false
console.log(sumNums.some(isBig2)); // false

// every ==> true, if all elements === true
// some ==> true, if only one element === true

// example 2

const fruits = [
    {
        name: "apples",
        amount: 3,
    },
    {
        name: "bananas",
        amount: 10,
    },
    {
        name: "oranges",
        amount: 1,
    },
];

const allAvailble = fruits.every((andrei) => andrei.amount > 0);
console.log(allAvailble);

const anyAvailble = fruits.some((sum) => sum.amount >= 10);
console.log(anyAvailble);

// === Array.prototype.reduce() ===

// используется для последовательной обработки каждого элемента массива с сохранением 
// промежуточного результата. Швейцарский нож функциональных методов массива.
// Перебирает
// Не изменяет
// Возвращает что угодно

// array.reduce(сallback[(previousValue, currentItem, index, array)], 
// initialValue)previousValue — промежуточный результат (аккумулятор)
// currentItem — текущий элемент массива
// index — индекс текущего элемента массива
// array — оригинальный массив

// example 1

const newSum = sumNums.reduce((acc, value) => acc + value, 10);
console.log(newSum);

let total = 0;

for (let el of sumNums) {
    total += el;
};

console.log(total);

// example 2

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(likes);

const countLikes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(countLikes(tweets));

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
console.log(tags);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

// === Array.prototype.sort() === Позволяет сортировать элементы массива на месте. 
// Помимо возврата отсортированного массива метод sort также отсортирует массив, 
// на котором он был вызван. По умолчанию метод sort сортирует, преобразуя элементы к строке.

// Перебирает
// Изменяет
// Возвращает коллекцию

const alpha = [1, 3, 5, 7, 4, 8, 2, 6];

console.log("before sort:", alpha);
console.log("after sort", alpha.sort());

const clients = ["Jane", "Jack", "Cecile", "Arlo", "Susan"];
console.log("before sort:", clients);
console.log("after sort", clients.sort());

// Свой порядок сортировки

const newUsers1 = [
{
    name: "James",
    age: 10,
},
{
    name: "Jack",
    age: 16,
},
{
    name: "Aliah",
    age: 3,
},
{
    name: "Susan",
    age: 24,
},
{
    name: "Katherina",
    age: 83,
},
];

const sortByAge = (a, b) => a.age - b.age;
console.log(newUsers1.sort(sortByAge));

const sortByAge1 = (a, b) => b.age - a.age;
console.log(newUsers1.sort(sortByAge1));

const sortByName = (a, b) => a.name - b.name;
console.log(newUsers1.sort(sortByName));

const sortByName1 = (a, b) => b.name - a.name;
console.log(newUsers1.sort(sortByName1));

// Цепочки методов массива

const myNums = [3, 5, 8, 99, 56, 43, 9, 76, 56, 70];
let myFilteredNums = myNums.filter(num => num % 2 === 0);
console.log(myFilteredNums);

const doubleNums = myFilteredNums.map(num => num * 2);
console.log(doubleNums);

const reverseNums = doubleNums.reverse();
console.log(reverseNums);

// ============================================================ //

const result = myNums.filter(num => num % 2 === 0).map(num => num * 2).reverse();
console.log(result);