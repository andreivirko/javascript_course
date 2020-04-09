// "use strict";

// // Массивы

// let arr = [];
// console.log(arr);

// arr = ["name", 232];
// console.log(arr);

// const students = ["james", "susan", "john"];
// console.log(students);

// console.log(students.length);

// console.log(students[0]); // james
// console.log(students[1]); // susan
// console.log(students[2]); // john
// console.log(students[3]); // undefined

// students[0] = "jeremy"; // перезаписали значение елемента указанном индексе
// console.log(students);

// students[3] = "gabriel"; // добавили елемент со значением
// console.log(students);

// console.log(students.length); // узнали количество елементов в массиве

// students.length = 3; // уменьшили количество елементов в массиве принудительно
// console.log(students);

// students.length = 6; // увеличели количество елементов в массиве принудительно
// console.log(students); // empty x 3

// // итерация по массиву (перебор массива)

// // цикл for (со счетчиком)
// // (с какгого елемента начинаем; до кагого елемента шагаем; 
// // наш шаг(через одну ступень, через две, и.т.д))

// // for (let i = 0; i < students.length; i += 1) {
// //     console.log(students[i]);   // undefined x 3
// // }

// // // заполнение массива данними (новыми елементами)

// for (let i = 1; i <= 6; i += 2) {
//     students.push(`new student - ${i}`);
// }

// // console.log(students);

// // цикл for of 

// for (const student of students) {
//     console.log(student);
// }

// const house = ["flat1", "flat2", "flat3", "flat4", "flat5"];

// for (const flat of house) {
//     console.log(flat);
// }

// const apples = ["apple1", "apple2", "apple3", "apple4", "apple5"];

// for (const apple of apples) {
//     console.log(apple);
// }

// const week = ["d1", "d2", "d3", "d4", "d5", "d6", "d7"];

// for (const day of week) {
//     console.log(day);
// }

// const fullName = "Andrei Virko";

// for (const char of fullName) {
//     console.log(char);
// }

// // let myCars = ["ferrari", "lamborgini", "porsche", "bougatti"];

// // let myCar = myCars[Math.floor(myCars.length * Math.random())];

// // console.log(myCar);

// // const worldCars = ["bmw", "mercedes", "mitsubishi", "mazda", "toyota", "lada", "hundai", "ferrari", "lamborgini", "porsche", "bougatti"]

// // let msg;

// // for (const car of worldCars) {
// //     console.log(car);
// //     if (car === myCar) {
// //         msg = "У меня есть такая тачка!";
// //         break;
// //     }
// //     msg = "У меня не было еще тачки(";
// // }

// // console.log(`${myCar}, ${msg}`)

// // ============================================================================================================================================== //

// // let myCars = ["Land Rover", "WV", "Subaru"];
// // let myCar = myCars[Math.floor(myCars.length * Math.random())];

// // const worldCarsList = [
// //   "BMW",
// //   "Toyota",
// //   "Mersedes",
// //   "Porshe",
// //   "Audi",
// //   "Lexus",
// //   "Honda",
// //   "Mazda",
// //   "Land Rover",
// //   "Nissan",
// //   "Subaru"
// // ];

// // let msg;

// // for (const car of worldCarsList) {
// //   if (car === myCar) {
// //     console.log(car);
// //     msg = "Оу, у меня была такая тачка!";
// //     break;
// //   }
// //   msg = "У меня не было еще такой машины! А жаль...";
// // }
// // console.log(`${myCar}, ${msg}`);

// // директива continue

// // const nams = [1, 23, 123, 1234, 12345, 1234567, 12345678, 123456789, 1234567890];

// // let nammor = 1000;

// // for (let i = 0; i < nams.length; i += 1) {
// //     if (nams[i] < nammor) {
// //         continue;
// //     }
// //     console.log("это число больше 1000", nams[i]);
// // }

// // занятие 2
// // многмерные массивы 

// const house1 = [[0.1, 0.2, 0.3], [1.1, 1.2, 1.3], [2.1, 2.2, 2.3], 2];
// console.log(house1);

// console.log(house1[0]); // [0.1, 0.2, 0.3]
// console.log(house1[1]); // [1.1, 1.2, 1.3]
// console.log(house1[2]); // [2.1, 2.2, 2.3]

// console.log(house1[0][0]); // 0.1
// console.log(house1[0][1]); // 0.2
// console.log(house1[0][2]); // 0.3

// console.log(house1[1][0]); // 1.1
// console.log(house1[1][1]); // 1.2
// console.log(house1[1][2]); // 1.3

// console.log(house1[2][0]); // 2.1
// console.log(house1[2][1]); // 2.2
// console.log(house1[2][2]); // 2.3

// console.log(house1[0][3]); // undefined
// console.log(house1[1][3]); // undefined
// console.log(house1[2][3]); // undefined

// console.log(house1[3]); // 2

// for (let i = 0; i < house1.length; i += 1) {
//     console.log("Вложенный массив", house1[i]);
//     for (let j = 0; j <= arr.length; j += 1) {
//         console.log("Элемент вложенного массива", house1[i][j]);
//     }
// }

// console.log(house1);

// // Присвоение по значению (для примитивов)

// let a = 5;
// let b = a;
// console.log(b, a);

// a = 30;
// console.log(b, a);

// b = a;
// console.log(b, a);

// a = 100;
// console.log(b, a);

// // Присвоение по ссылке (для сложных типов данных)

// const units = ["alpha", "beta", "gamma"];
// const newUnits = units;
// console.log("newUnits", newUnits);
// console.log("units", units);

// units[0] = "1";

// console.log("newUnits", newUnits);
// console.log("units", units);

// // методы массива
// // добавление елементов

// units.push("delta"); // добавление элементов в конец массива
// console.log("units", units);
// console.log("newUnits", newUnits);

// newUnits.unshift("epsilon"); // добавление элементов в начале массивов
// console.log("units", units);
// console.log("newUnits", newUnits);

// units.push("3", "4"); // добавление элементов в конец массива
// console.log("units", units);
// console.log("newUnits", newUnits);

// newUnits.unshift("5", "6"); // добавление элементов в начале массивов
// console.log("units", units);
// console.log("newUnits", newUnits);

// // удаление элементов

// units.pop(); // удаляет один последний элемент массива
// console.log("units", units);
// console.log("newUnits", newUnits);

// units.pop(); // удаляет один последний элемент массива
// console.log("units", units);
// console.log("newUnits", newUnits);

// units.pop(); // удаляет один последний элемент массива
// console.log("units", units);
// console.log("newUnits", newUnits);

// units.shift(); // удаляет один первый элемент массива
// console.log("units", units); 
// console.log("newUnits", newUnits);

// // преобразование элеметов в строку

// console.log(typeof units); // object - сложный тип данных
// let newString = units.join(""); // преобразовываем массив в строку
// console.log(newString); // 6epsilon1betagamma
// console.log(typeof newString); // тип данных string

// console.log(units.join(", ")); // 6, epsilon, 1, beta, gamma

// console.log(units.join(" - ")); // 6 - epsilon - 1 - beta - gamma

// // разбить строку на массив

// let msg = "what time is it?"
// let newArr = msg.split(" "); // разделит строку на элементы по прабелу
// console.log(newArr);

// newArr = msg.split(""); // зазабьет строку в массив 
// // отдельным элементом сделает каждый символ строки, включая пробелы и знаки препинания 
// console.log(newArr);

// newArr = msg.split("t"); // разделит строку на элементы с разделителем символ t
// console.log(newArr);

// msg = "what,time,is,it?";
// newArr = msg.split(","); // разделит строку на элементы по ,
// console.log(newArr);

// // способы поиска элементов в массиве

// console.log(units);
// console.log(units[0]); // 6 - мы узнали значение элемента обратившись к массиву через индекс искомого элемента

// console.log(units.indexOf("6")); // 0 - возвращает порядковый номер индекса искомого элемента, если он есть
// console.log(units.indexOf("alpha")); // -1 - возвращает такой ответ, если элемент в массиве не найден

// console.log(units.includes("beta")); // true - если есть
// console.log(units.includes("alpha")); // false - если нет

// let welcome = "welcome to my world!";
// console.log(welcome);
// console.log(typeof welcome);

// console.log(welcome.includes("to")); // true
// console.log(welcome.includes("lc")); // true
// console.log(welcome.includes(" t")); // true
// console.log(welcome.includes(" ")); // true
// console.log(welcome.includes("!")); // true
// console.log(welcome.includes("?")); // false
// console.log(welcome.includes("WORLD")); // false

// // проверка условий 
// const fruit = "rasberry";

// if (fruit === "rasberry" || fruit === "strawberry") {
//     console.log("this is red berry");
// }

// const redFruits = ["cherry", "rasberry", "cranberry"];

// if (redFruits.includes(fruit)) {
//     console.log("this is red berry");
// } else {
//     console.log("this is not red berry");
// }

// // копиривание массивов

// let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // исходный массив
// console.log("numList", numList);
// let sliceList = numList.slice(); // скопировать полностью исходный массив
// console.log("sliceList", sliceList);
// sliceList.pop();
// console.log("sliceList", sliceList);
// console.log("numList", numList);

// let partSliceList = numList.slice(0, 6);
// console.log("partSliceList", partSliceList);

// partSliceList = numList.slice(-3);
// console.log(partSliceList);

// partSliceList = numList.slice(-5);
// console.log(partSliceList);

// partSliceList = numList.slice(-1);
// console.log(partSliceList);

// // швецарский нож .splice();

// console.log("numList", numList);

// // удаление элементов (1 - начало, 2 - количество элементов)

// let spliceArr = numList.splice(0, 2);
// console.log("spliceArr", spliceArr); // [0, 1] - создан новый массив из удаленных элементов удаленного массива
// console.log("numList", numList); // [2, 3, 4, 5, 6, 7, 8, 9] - мутированный исходный массив

// // вставка элементов (1 - начало, всегда 0, все элементы, которые надо вставить)

// spliceArr = numList.splice(0, 0, "2", 3, "4");
// console.log("spliceArr", spliceArr); // массив из добавлених элементов не создаеться
// console.log("numList", numList); // исходный массив мутировал

// spliceArr = numList.splice(9, 0, "js", "html");
// console.log("spliceArr", spliceArr); // массив из добавлених элементов не создаеться
// console.log("numList", numList); // исходный массив мутировал

// // замена элементов (1 - начало, 2 - количество элементов, котоые надо заменить, а после них, надо перечислить элеенты которые надо вставить на замену)

// spliceArr = numList.splice(0, 3, 0, 1);

// console.log("spliceArr", spliceArr); // массив из замененных элементов не создаеться
// console.log("numList", numList); // исходный массив мутировал 

// spliceArr = numList.splice(4, 2, "7", "9");

// console.log("spliceArr", spliceArr); // массив из замененных элементов не создаеться
// console.log("numList", numList); // исходный массив мутировал 

// spliceArr = numList.splice(-1, 2, "7", "9");

// console.log("spliceArr", spliceArr); // массив из замененных элементов не создаеться
// console.log("numList", numList); // исходный массив мутировал 

// // обьеденение массивов

// const Arr1 = ["hello"];
// const Arr2 = ["world"];
// const Arr3 = ["!"];
// const newArr1 = Arr1.concat(Arr2).concat(Arr3);
// console.log(newArr1);

<<<<<<< HEAD
// функции
// FUNCTION EXPRESSION (with variable)
// ОБЬЯВЛЕНИЕ ФУНКЦИИ
//                  (параметры)
const add = function(a, b, c) {
    return (a + b + c);
};
// вызов функции - приведение функции в дейстивия
//                (аргументы)
const result = add(7, 23, 24); // записал в переменную вызов функции

console.log(result);
//             (аргументы)
console.log(add(1, 2, 3)); // 6

const toBuyProducts = function(meat, milk, bread) {
    console.log(meat, milk, bread);
};

//           (аргументы)
toBuyProducts("chiken", "cow", "white");
toBuyProducts(undefined, "cow", "white");

// // АРГУМЕНТЫ - ЭТО ЗНАЧЕНИЯ ПАРАМЕТРОВ

// параметры по умолчанию (дефолтные параметры)

let toBuyNewProducts = function(meat = "chiken", milk = "простокавашина", bread) {
    console.log(meat, milk, bread);
};

toBuyNewProducts(undefined, undefined, "white");
toBuyNewProducts("pork", undefined, "white");

// // ПОРЯОК ВЫПОЛНЕНИЯ КОДА

// тут мы обьявляем функции
const fn1 = function() {
    console.log("начала выполняться новая первая функция!");
    fn2();
    console.log("продолжение выполнения первой функции!");
}

const fn2 = function() {
    console.log("выполняется вторая функция!");
};

// а тут мы выполняем код

console.log("начато выполнение основного кода!"); // done
fn1();
console.log("продолжение выполнение основного кода!");

// Псевдомассив arguments
// принимает все переданные аргументы (значение параметров) при вызове функции 
// не зависимо от их количества и знаечения
// перебирается с помощью цикла for of (for), что позволяет проводить операции
// с каждым аргументом, указанным в () при вызове функции
// Псевдомассив - это тоже массив, только он не имеет большенства методов мвссивов

const sumOfTests = function() {
    let total = 0;
    for (const argument of arguments) {
        console.log("псевдомассив", arguments);
        // console.log("значение аргумента на каждой итерации", argument);
        total += argument;
        // console.log("сумма аргументов на каждой итерации", total);
    }
    return console.log("общая сумма", total);
}

sumOfTests(3, 2, 1);
sumOfTests(3, 2, 1, 4, 2);
sumOfTests(3, 2, 1, 4, 2, 5, 10);

const array = [1, 2, 3];
console.log(array);

// ПРЕОБРАЗОВАНИЕ ПСЕВОДОМАССИВА arguments  В НОРМАЛЬНЫЙ МАССИВ

const fn3 = function() {
    console.log("псевдомассив", arguments);
    const args = Array.from(arguments); // преобразование в массив 
    console.log("преобразованный массив", args); 
}

fn3(undefined, true, null, false, 7, "hey", [1, 2, 3]);

// REST (...args) - это оператор розширения 

const fn4 = function(...args) {
    console.log("полноценный массив аргументов", args);
}


fn4(1, 2, 3, 10, 4);

// guard clause

const takeCash = function (amount, balance) {
    if (amount === 0) {
        console.log("enter the sum");
    } else if (amount > balance) { 
        console.log("sorry no money");
    } else {
        console.log("please take your cash");
    }
}

takeCash(0, 3000);
takeCash(5000, 3000);
takeCash(1000, 3000);

const takeCash1 = function(amount1, balance1) {
    if (amount1 === 0) {
        console.log("1 - enter the sum");
        return; // без этого слова, будут выводится ложныу данные
    } 
    
    if (amount1 > balance1) { 
        console.log("1 - sorry no money");
        return; // без этого слова, будут выводится ложныу данные
    } 
        console.log("1 - please take your cash");
}

takeCash1(0, 3000);
takeCash1(5000, 3000);
takeCash1(1000, 3000);

// function decloration (without variable)
// такую функцию можно вызвать до ее обьявления 
// это обусловлено феноменом хостинг (всплытие)


functionDecloration(1, 2, 3); // function decloration  можно вызвать до ее обьявления
function functionDecloration(a, b, c) {
    return console.log("function decloration", a + b + c);
}

functionDecloration(1, 2, 3);

// в отличие от: 

// functionExpression(3, 4, 6); // function expression нельзя вызвать до ее обьявления 
const functionExpression = function(a, b, c) {
    return console.log("function expression", a + b + c);
}

functionExpression(3, 4, 6);

// GLOBAL SCOPE & LOCAL SCOPE (FUNCTION SCOPE & BLOCK SCOPE)

// ========== GLOBAL SCOPE ========== //  

function relative() {

    // ======== LOCAL FUNCTION relative() SCOPE ======== // 

    if (true) {
    
    // LOCAL BLOCK SCOPE 
    
        console.log();
    }

    // ======== LOCAL FUNCTION relative() SCOPE ======== // 

    function child() {

    // LOCAL FUNCTION child() SCOPE
    
        console.log();        
    }

    // ======== LOCAL FUNCTION relative() SCOPE ======== // 

}

// ========== GLOBAL SCOPE ========== //  
=======
>>>>>>> b28b8018afcdcc6707e9cc5396b275faa277d2a6
