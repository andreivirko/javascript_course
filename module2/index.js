"use strict";

// Массивы

let arr = [];
console.log(arr);

arr = ["name", 232];
console.log(arr);

const students = ["james", "susan", "john"];
console.log(students);

console.log(students.length);

console.log(students[0]); // james
console.log(students[1]); // susan
console.log(students[2]); // john
console.log(students[3]); // undefined

students[0] = "jeremy"; // перезаписали значение елемента указанном индексе
console.log(students);

students[3] = "gabriel"; // добавили елемент со значением
console.log(students);

console.log(students.length); // узнали количество елементов в массиве

students.length = 3; // уменьшили количество елементов в массиве принудительно
console.log(students);

students.length = 6; // увеличели количество елементов в массиве принудительно
console.log(students); // empty x 3

// итерация по массиву (перебор массива)

// цикл for (со счетчиком)
// (с какгого елемента начинаем; до кагого елемента шагаем; 
// наш шаг(через одну ступень, через две, и.т.д))

// for (let i = 0; i < students.length; i += 1) {
//     console.log(students[i]);   // undefined x 3
// }

// // заполнение массива данними (новыми елементами)

for (let i = 1; i <= 6; i += 2) {
    students.push(`new student - ${i}`);
}

// console.log(students);

// цикл for of 

for (const student of students) {
    console.log(student);
}

const house = ["flat1", "flat2", "flat3", "flat4", "flat5"];

for (const flat of house) {
    console.log(flat);
}

const apples = ["apple1", "apple2", "apple3", "apple4", "apple5"];

for (const apple of apples) {
    console.log(apple);
}

const week = ["d1", "d2", "d3", "d4", "d5", "d6", "d7"];

for (const day of week) {
    console.log(day);
}

const fullName = "Andrei Virko";

for (const char of fullName) {
    console.log(char);
}

// let myCars = ["ferrari", "lamborgini", "porsche", "bougatti"];

// let myCar = myCars[Math.floor(myCars.length * Math.random())];

// console.log(myCar);

// const worldCars = ["bmw", "mercedes", "mitsubishi", "mazda", "toyota", "lada", "hundai", "ferrari", "lamborgini", "porsche", "bougatti"]

// let msg;

// for (const car of worldCars) {
//     console.log(car);
//     if (car === myCar) {
//         msg = "У меня есть такая тачка!";
//         break;
//     }
//     msg = "У меня не было еще тачки(";
// }

// console.log(`${myCar}, ${msg}`)

// ============================================================================================================================================== //

// let myCars = ["Land Rover", "WV", "Subaru"];
// let myCar = myCars[Math.floor(myCars.length * Math.random())];

// const worldCarsList = [
//   "BMW",
//   "Toyota",
//   "Mersedes",
//   "Porshe",
//   "Audi",
//   "Lexus",
//   "Honda",
//   "Mazda",
//   "Land Rover",
//   "Nissan",
//   "Subaru"
// ];

// let msg;

// for (const car of worldCarsList) {
//   if (car === myCar) {
//     console.log(car);
//     msg = "Оу, у меня была такая тачка!";
//     break;
//   }
//   msg = "У меня не было еще такой машины! А жаль...";
// }
// console.log(`${myCar}, ${msg}`);

// директива continue

// const nams = [1, 23, 123, 1234, 12345, 1234567, 12345678, 123456789, 1234567890];

// let nammor = 1000;

// for (let i = 0; i < nams.length; i += 1) {
//     if (nams[i] < nammor) {
//         continue;
//     }
//     console.log("это число больше 1000", nams[i]);
// }

// занятие 2
// многмерные массивы 

const house1 = [[0.1, 0.2, 0.3], [1.1, 1.2, 1.3], [2.1, 2.2, 2.3], 2];
console.log(house1);

console.log(house1[0]); // [0.1, 0.2, 0.3]
console.log(house1[1]); // [1.1, 1.2, 1.3]
console.log(house1[2]); // [2.1, 2.2, 2.3]

console.log(house1[0][0]); // 0.1
console.log(house1[0][1]); // 0.2
console.log(house1[0][2]); // 0.3

console.log(house1[1][0]); // 1.1
console.log(house1[1][1]); // 1.2
console.log(house1[1][2]); // 1.3

console.log(house1[2][0]); // 2.1
console.log(house1[2][1]); // 2.2
console.log(house1[2][2]); // 2.3

console.log(house1[0][3]); // undefined
console.log(house1[1][3]); // undefined
console.log(house1[2][3]); // undefined

console.log(house1[3]); // 2

for (let i = 0; i < house1.length; i += 1) {
    console.log("Вложенный массив", house1[i]);
    for (let j = 0; j <= arr.length; j += 1) {
        console.log("Элемент вложенного массива", house1[i][j]);
    }
}

console.log(house1);

// Присвоение по значению (для примитивов)

let a = 5;
let b = a;
console.log(b, a);

a = 30;
console.log(b, a);

b = a;
console.log(b, a);

a = 100;
console.log(b, a);

// Присвоение по ссылке (для сложных типов данных)

const units = ["alpha", "beta", "gamma"];
const newUnits = units;
console.log("newUnits", newUnits);
console.log("units", units);

units[0] = "1";

console.log("newUnits", newUnits);
console.log("units", units);

// методы массива
// добавление елементов

units.push("delta"); // добавление элементов в конец массива
console.log("units", units);
console.log("newUnits", newUnits);

newUnits.unshift("epsilon"); // добавление элементов в начале массивов
console.log("units", units);
console.log("newUnits", newUnits);

units.push("3", "4"); // добавление элементов в конец массива
console.log("units", units);
console.log("newUnits", newUnits);

newUnits.unshift("5", "6"); // добавление элементов в начале массивов
console.log("units", units);
console.log("newUnits", newUnits);

// удаление элементов

units.pop(); // удаляет один последний элемент массива
console.log("units", units);
console.log("newUnits", newUnits);

units.pop(); // удаляет один последний элемент массива
console.log("units", units);
console.log("newUnits", newUnits);

units.pop(); // удаляет один последний элемент массива
console.log("units", units);
console.log("newUnits", newUnits);

units.shift(); // удаляет один первый элемент массива
console.log("units", units); 
console.log("newUnits", newUnits);

// преобразование элеметов в строку

console.log(typeof units); // object - сложный тип данных
let newString = units.join(""); // преобразовываем массив в строку
console.log(newString); // 6epsilon1betagamma
console.log(typeof newString); // тип данных string

console.log(units.join(", ")); // 6, epsilon, 1, beta, gamma

console.log(units.join(" - ")); // 6 - epsilon - 1 - beta - gamma

// разбить строку на массив

let msg = "what time is it?"
let newArr = msg.split(" "); // разделит строку на элементы по прабелу
console.log(newArr);

newArr = msg.split(""); // зазабьет строку в массив 
// отдельным элементом сделает каждый символ строки, включая пробелы и знаки препинания 
console.log(newArr);

newArr = msg.split("t"); // разделит строку на элементы с разделителем символ t
console.log(newArr);

msg = "what,time,is,it?";
newArr = msg.split(","); // разделит строку на элементы по ,
console.log(newArr);

// поиск элементов в массиве

units[0];















