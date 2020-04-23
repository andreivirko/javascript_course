"use strict";

// CALLBACK (функция обратного вызова)
// передается при вызове другой функции в качестве аргумента

const showCallback = function(param) {
    console.log(param);
};

// функция высшего порядка - принимает в качестве параметров
// callback функции и вовращает их как результат

const highOrderFunc = function(callbackFunc) {
    const message = "вот так работает callback";
    callbackFunc(message);
};

highOrderFunc(showCallback);

// 2

const showHeroes = function(heroes) {
    console.log(heroes);
};

const mainFunc = function(callback) {
    const heroes = ["thor", "black widow", "captain america", "hulk"];
    for (const hero of heroes) {
        // console.log(hero);
        callback(hero);
    }
};

mainFunc(showHeroes);

// 3

const argumentFunc = function(message) {
    console.log(message);
};

const higherOrderFunction = function(setting) {
    const string = "tralala";
    setting(string);
}

higherOrderFunction(argumentFunc);

//абстрагирывание повторений

const repeat = function(n) {
    let result;
    for (let i = 0; i <= n; i += 1) {
        result = i;
        console.log("каждая итерация", result);
    }
    console.log("последняя итерация", result);
};

repeat(0);

// 2 

const showResult = function(result) {
    console.log(result);
};

const showResultWithComment = function(value) {
    console.log("коментарий к результату", value);
};

const newRepeat = function(num, callback) {
    for (let i = 0; i <= num; i += 1) {
        callback(i);
    }
};

newRepeat(1, showResult);
newRepeat(1, showResultWithComment);

// анонимная callback функция (стрелочная)
// вызывается сразу при вызове в функции высшего порядка

const array = [];
newRepeat(3, (value) => {array.push(`element - ${value + 1}`)});
console.log(array);

// фильтр массивов

const filterFunc = function(array, cbFunc) {
    const filteredArray = [];
    for (const element of array) {
        const ok = cbFunc(element);
        if (ok) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};

const fruits = [
    {name: "apples", quantity: 200, isFresh: true},
    {name: "oranges", quantity: 320, isFresh: false},
    {name: "peaches", quantity: 120, isFresh: true},
    {name: "mandarins", quantity: 270, isFresh: true},
];

const freshFruits = filterFunc(fruits, (fruit) => fruit.quantity >= 210);
console.log(freshFruits);

const movies = [
    {name: "avengers", rate: 8.1, ticketPrice: 10},
    {name: "ironaman", rate: 7.1, ticketPrice: 9},
    {name: "thor", rate: 6.1, ticketPrice: 8},
    {name: "endgame", rate: 5.1, ticketPrice: 7},
    {name: "infinity war", rate: 4.1, ticketPrice: 6},
];

const myRate = filterFunc(movies, (films) => films.rate >= 6);
console.log(myRate);

const myTicketprice = filterFunc(movies, (films) => films.ticketPrice > 9);
console.log(myTicketprice);

// стэк вызовов

// ============ СТЕК ВЫЗОВОВ / КОНТЕКСТ ИСПОЛНЕНИЯ
//  Execution Context stack / (execution context)
//             (callstack) / global (default) & functional
//                                           (каждый раз при вызове)
// структура данных (котел) / (LIFO - Last In, First Out)

//              верх стека  _____   выполнение начинается с верха
//  2я Вложенная ф-я        | 3 |   эта выполнится 1я - stack frame
//                          _____
//  1я Вложенная ф-я        | 2 |   эта - 2я - stack frame
//                          _____
//  Родительская ф-я        | 1 |   эта последняя - stack frame
//              дно стека   _____

const three = function() {
    console.log("выполнилась третья функция"); // 2
};

const two = function() {
    three();
    console.log("выполнилась вторая функция"); // 3
};

const one = function() {
    two();
    console.log("выполнилась первая функция"); // 4
};

const parent = function() {
    console.log("начала выполняться родительская функция"); // 1
    one(); 
    console.log("закончила выполняться родительская функция"); // 5
};

parent();

// лексичное окружение

const x = 10;
const y = 20;
let double = 1;

const sum = function(z) {
    return console.log(x + y + z);
    //                10 + 20 + 33
};

sum(33);

const sum1 = function(z) {
    const x = 100;
    double = 500;
    return console.log(x + y + z);
    //               100 + 20 + 33
};
sum1(33);

console.log(double);

// замыкание - это срособность функции получать доступ к переменным
// из ее лексичиского окружения при обьявлении, независимо от того
// где она была вызвана

const createCounter = function() {
    let privateValue = 0;
    const increment = function() {
        privateValue += 1;
        console.log(privateValue);
    };
    const decrement = function() {
        privateValue -= 1;
        console.log(privateValue);
    };
    return {increment, decrement};
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2
counterA.increment(); // 3
counterA.increment(); // 4
counterA.decrement(); // 3
counterA.decrement(); // 2
counterA.decrement(); // 1
counterA.decrement(); // 0

const counterB = createCounter();

counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3
counterB.increment(); // 4
counterB.decrement(); // 3
counterB.decrement(); // 2
counterB.decrement(); // 1
counterB.decrement(); // 0

console.dir(counterA);
console.log(counterA);

// пример 2
const makeDish = function(chefName, dish) {
    console.log(`${chefName}, is cooking ${dish}`);
};

makeDish("John", "pizza");

const makeChef = function(name) {
    return function makeDish(dish) {
        console.log(`${name} is cooking ${dish}`);
    };
};

const Andrei = makeChef("Andrei");
Andrei("pizza"); 

// this in global enviroment

const myFunc = function() {
    console.log(this);
};

myFunc(); // undefined

// значение контекста this внутри функции определяется в момент ее вызова
// this в методах обьекта

const Andrei1 = {
    name: "Andrei", 
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.name);
    }
}

Andrei1.showThis();
Andrei1.showName();

// пример 2

const showThis = function() {
    console.log("обьект в функции showThis", this);
};

showThis(); // undefined

const user = {name: "Andrei",};
user.newMethod = function() {
    console.log("добавление метода с ссылкой на контекст", this);
};

user.newMethod();
user.showContecst = showThis;
user.showContecst();

// this в колбеках

const hotel = {
    name: "hilton",
    showThis() {
        console.log(this); 
    },
};

const fn = function(callback) {
    // во время вызова функции fn, колбек будет ссылокой на метод обьекта showThis
    // его вызов происходит глобально, значит он не видет обьект hotel снаруже и
    // не может на него ссылатся
    callback();
};

fn(hotel.showThis); // undefined

// this в стрелочных функциях

const functionExpression = function() {
    console.log("обычное функциональное вырожение", this);
}

functionExpression(); // undefined

const functionArrow = () => {console.log("стрелочная функция", this)};

functionArrow(); // undefined

const newUser = {name: "andrei"};

// создаем метод обьекта из стрелочной функции

newUser.functionArrow = functionArrow;
newUser.functionArrow(); // undefined

// создаем метод обьекта из обычной фуекции

newUser.functionExpression = functionExpression;
newUser.functionExpression(); // {name: "andrei", functionArrow: ƒ, functionExpression: ƒ}

// // 2

const motel = {
    name: "luxy",
    showThis() {
        const fn = () => {
        console.log("this в стрелке ынутри метода", this);
        };
        fn();
        console.log("this в методе", this);
    },
};

motel.showThis();

// методы CALL, APPLY, BIND

const greet = function() {
    return `welcome to ${this.name}`;
};

const newHotel = {
    name: "rixos",
};

// console.log(greet(newHotel)); // не работает (так нельзя)

console.log(greet.call(newHotel)); // welcome to rixos
console.log(greet.apply(newHotel)); // welcome to rixos

// call вызовет функцию, передав в ее this ссылку на обьект, а также остальные 
// аргументы через запятую

const greet1 = function(guest, stars) {
    return `${guest}, welcome to ${stars} - star ${this.name}`
};

const firstHotel = {name: "resort"};
console.log(greet1.call(firstHotel, "andrei", 5)); // andrei, welcome to 5 - star resort

const secondHotel = {name: "resort spa"}; 
console.log(greet1.call(secondHotel, "andrei", 5)); // andrei, welcome to 5 - star resort spa

// APPLY - полный аналог метода call, только аргументы передаються в массиве
console.log(greet1.apply(firstHotel, ["andrei", 3])); // andrei, welcome to 3 - star resort
console.log(greet1.apply(secondHotel, ["john", 5])); // john, welcome to 5 - star resort spa

// BIND - создает копию функции с привязкой к обьекту и аргументами через запатую
// в итоге мы получаем копию функции с привязаным контекстом которую можно передать
// куда угодно и как угодно

const greet3 = function(guest) {
    return `${guest} welcome to ${this.name}`;
};

const thirdHotel = {name: "rehana"};

const hotelGreeter = greet3.bind(thirdHotel, "Rhianna");
console.log(hotelGreeter());

// чаще всего bind используют для привязки контекста при передаче методов обьекта
// как функции обратного вызова

const product = {name: "shampoo", 
showThis() {
    console.log(this);
},
};

const fn1 = function(callback) {
    callback();
}

fn1(product.showThis.bind(product)); // {name: "shampoo", showThis: ƒ}
fn1(product.showThis); // undefined

// 2

const toGetFeCourse = function(toDoHw1, toDoHw2, toDoHw3, toDoHw4) {
    toDoHw1();
    toDoHw2();
    toDoHw3();
    toDoHw4();
};

const homework1 = {
    name: "homework 1",
    toDoHw1() {
        console.log(this.name);
    },
};

const homework2 = {
    name: "homework 2",
    toDoHw2() {
        console.log(this.name);
    },
};

const homework3 = {
    name: "homework 3",
    toDoHw3() {
        console.log(this.name);
    },
};

const homework4 = {
    name: "homework 4",
    toDoHw4() {
        console.log(this.name);
    },
};

toGetFeCourse(homework1.toDoHw1.bind(homework1), homework2.toDoHw2.bind(homework2),
homework3.toDoHw3.bind(homework3), homework4.toDoHw4.bind(homework4));