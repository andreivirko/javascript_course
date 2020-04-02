"use strict";

// ============== 1 =========================================
// Создай массив authors с именами авторов:
// William Shakespeare, Guy de Maupassant, Dante Alighieri, Mikhail Bulgakov, Albert Camus, Erich Maria Remarque
// С помощью методов массива, добавь в конец массива authors три элемента со значениями:
// Honore de Balzac, Miguel de Cervantes, Anton Chekhov
// а в начало массива, три элемента со значениями:
// Charles Dickens, Edgar Allan Poe, Gabriel Garcia Marquez
// Выведи обновленный массив в консоль.
// в комментарии после команды консоль укажи количество элементов измененного массива
 
let authors = ["William Shakespeare", "Guy de Maupassant", "Dante Alighieri", "Mikhail Bulgakov", "Albert Camus", "Erich Maria Remarque"];
authors.push("Honore de Balzac", "Miguel de Cervantes", "Anton Chekhov");
authors.unshift("Charles Dickens", "Edgar Allan Poe", "Gabriel Garcia Marquez");
console.log(authors); // 12

// ============== 2 =========================================
// Создай массив scores с элементами:
// 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42
// с помощью методов массива shift() и pop(), удали первые два и последние три элемента
// Выведи результат в консоль

let scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
console.log("до применение методов", scores);
scores.pop();
scores.pop();
scores.pop();
// console.log("метод pop", scores);

scores.shift();
scores.shift(); 
console.log("метод pop и shift", scores);
 
// ============== 3 =========================================
// Создай массив results с элементами:
// 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42
// с помощью метода splice(), удали первые два и последние три элемента, записав удаленные элементы
// в отдельные массивы removeFromStart и removeFromEnd
// Выведи в консоль все массивы
 
let results = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];

let removeFromStart = results.splice(0, 2);
console.log(removeFromStart);

// let removeFromEnd = results.splice(8, 3);
let removeFromEnd = results.splice(-3);
console.log(removeFromEnd);
console.log("мутированый", results);

// ============== 4 =========================================
// Создай массив partOfResults и скопируй в него элементы от 3 до 532 включительно
// из измененного массива results из задания 3 
// (т.е. все задание 3 и массив results должны быть раскомментированы)
 
let partOfResults = results.slice(2, 7);
console.log(partOfResults); // [3, 4, 98, 67, 532]

// ============== 5 =========================================
// Создай массив doubleResults и скопируй в него все элементы
// из измененного массива results из задания 3

let doubleResults = results.slice();
console.log(doubleResults);

// ============== 6 =========================================
// Перебери массив doubleResults из задания 5
// Четные числа из массива запиши в новый массив evenResults, а
// Нечетные - в oddResults
// В обратной последовательности в обоих случаях
// Выведи в консоль массивы evenResults и oddResults

let evenResults = [];
let oddResults = [];

for (let k = 0; k < doubleResults.length; k += 1) {
    console.log(doubleResults[k]);
    if (doubleResults[k] % 2 === 0) {
        evenResults.unshift(doubleResults[k]);
    } else {
        oddResults.unshift(doubleResults[k]);
    }
}

console.log(oddResults); // [611, 67, 3, 17, 15]
console.log(evenResults); // [532, 98, 4]

// сначало 3, 2, потом 1
// [1, 2, 3] 

// ============== 7 =========================================
// Объедините массивы oddResults и evenResults из задания 6, записав их в новый массив AllResults
// Перебери новый массив AllResults и выбери только те элементы массива,
// которые содержат 1 и запиши эти элементы в новый массив includesOne
// "обрати внимание, что массив includesOne должен содержать элемента с типом number, а не string!

let AllResults = oddResults.concat(evenResults);
console.log(AllResults);

let includesOne = [];

for (let j = 0; j < AllResults.length; j += 1) {
    // console.log(AllResults[j]);
    let stringElement = AllResults[j].toString();
    // console.log(stringElement);
    if (stringElement.includes(1)) {
        console.log(stringElement);
        includesOne.push(+stringElement);
    }
}

console.log(includesOne);