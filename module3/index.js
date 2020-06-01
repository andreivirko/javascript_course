"use strict";

// OBJECT

let abc = {
    1: "a",
    2: "b",
    3: "c", // property = key : value
    // key : value
} 

console.log(abc);

let language = {
    lang1: "html",
    lang2: "css",
    lang3: "js"

}

let student = {
    name: "Bob",
    lastName: "Dylan",
    age: 17,
    language: language,
    passExam: true,
    size: ["s", "m", "l"]
} 

console.log(student);

let girl = {
    name: "natasha",
    age: 15,

}

 // 1 - object.key

console.log(girl.name);
console.log(girl.age);
console.log(girl.address); // udefined because in this object havent got this property

girl.address = "Lenina 13"; // added new property
console.log(girl.address);
console.log(girl);

girl.age = 22; // the value of property is changed
console.log(girl.age); 
console.log(girl);

delete girl.age; // to delete the property
console.log(girl.age); // undefined, because this property was deleted before
console.log(girl);

// 2 - object["key"]

console.log(girl["name"]);
console.log(girl["age"]);
console.log(girl["address"]); // udefined because in this object havent got this property

girl["address"] = "Lenina 13"; // added new property
console.log(girl["address"]);
console.log(girl);

girl.age = 22; // the value of property is changed
console.log(girl["age"]); 
console.log(girl);

delete girl["age"]; // to delete the property
console.log(girl["age"]); // undefined, because this property was deleted before
console.log(girl);

// short properties 

let myPicture = "nature";
let myFavMusic = "rap";

let myHobbies = {
    myPicture,
    myFavMusic,
}

console.log(myHobbies); // short property = name of variable is a key of property, and the value of variable is also a variable of property

// computed properties
// my variable 
let myStaff = {
    picture: myPicture, // our variable gives only its value 
    [myFavMusic]: "gimme that",
}

console.log(myStaff);

// my function

let myFun = function() {
    return ("hello");
    
}

let myClothes = {
    [myFun()]: "world",
    greeting: myFun(),
}

console.log(myClothes);

// object methods 

const myProducts = {
    milk: 0.5,
    eggs: 5,
    apples: 3,
    toCheck() {
        console.log("check your products");
    },
    oranges: 10,
}

myProducts.toCheck();
console.log(myProducts);

myProducts.toBuy = function() {
    console.log("you need to buy these products");
}

myProducts.toBuy();
console.log(myProducts);

delete myProducts.toBuy;
console.log(myProducts);

// this

let product = {
    name: "shampoo",
    price: 15,
    showProductName() {
        console.log(this.name);
    },
    changePrice(value) {
        this.price = value;
    }
}

product.showProductName();
product.changePrice(1);
console.log(product);

// enumaration of objects

// цикл for...in - только для объектов, перебирает ключи объекта
//          OBJECT                        ARRAY
// for (let key in object) { || for (let el of array) {
//     // statements         ||       // statements
// }                         || }

const myCars = {
    ferrarri: "911",
    lamborghini: "aventador",
    mclaren: "p1",
}

for (let key in myCars) {
    console.log("key: ", key); // show only the kry of properties
}

for (let key in myCars) {
    console.log("value: ", myCars[key]); // show the value of properties
}

// METHODS OF CONSTRUCTOR OBJECT

// Object.keys(object); // вернет массив со строчными ключами


const hero = {
    name: "Deku",
    power: 100,
    lifes: 5,
    speed: 50,
}

const keysOfHero = Object.keys(hero);
console.log(keysOfHero);

for (let key of keysOfHero) {
    console.log(key);
    console.log(hero[key]);
}

// Object.entries(obj) - вернет массив массивов [key, value] с 2я элементами

const entriesOfHero = Object.entries(hero);

console.log(entriesOfHero);

for (const entry of entriesOfHero) {
    const key = entry[0];
    const value = entry[1];
    console.log(key, ":", value);
}

// Object.values(obj) - вернет массив со значениями свойств

const valuesOfHero = Object.values(hero);
console.log(valuesOfHero);

const testsScores = {
    test1: 16,
    test2: 21,
    test3: 22, 
    test4: 23,
}

const values = Object.values(testsScores);
console.log(values); // [16, 21, 22, 23]

let totalScore = 0;

for (const value of values) {
    totalScore += value; 
    // 0 += 16 - 16
    // 16 += 21 - 37
    // 37 += 22 - 59
    // 59 += 23 - 82
    console.log("itartion: ", totalScore);
}

console.log(totalScore);
// =======

let girl = {
    name: "natasha",
    age: 15,

}

// доступ к свойствам обьекта 

console.log(girl.name);
console.log(girl["age"]);

// добавление свойства обьекта

console.log(girl.address); // udefined because in this object havent got this property
girl.address = "Lenina 13"; // added new property
girl["number"] = "0954909648";
console.log(girl.address);
console.log(girl);

// зменение значение свойства обьекта

girl.age = 22; // the value of property is changed
console.log(girl.age);
girl["number"] = "567473930";
console.log(girl);

// удаление полностю свойства обьекта

delete girl.age; // to delete the property
console.log(girl.age); // undefined, because this property was deleted before
delete girl["number"];
console.log(girl);

// короткие свойства - это ключи свойств обьекта представлены ввиде переменных обьвленных в коде выше
// значение таких переменных будут являтся значениями свойств обьекта
let age = 15;
let name = "justin";
const people = {age, name};
console.log(people);

// вычисляемые свойства
// через переменную

const key = "test";

// через функцию

const getKey = function() {
    return "result";
}

const testResult = {
    key, // короткое свойство 
    [key]: 2, // указываем значение переменной в качестве ключа
    [getKey()]: 22,
}

console.log(testResult);

// методы обьекта 

const myProductList = {
    vegetables: "cucumber",
    fruits: "apple",
    meat: "chiken",
    toCheck() {console.log("проверь наличие")}, // это метод обьекта 
    sweats: "candies",
}

console.log(myProductList);
myProductList.toCheck(); // обращение к методу обьекта

myProductList.toBuySweats = function() { // создание нового метода обьекта
    console.log("купи торт!");
}

console.log(myProductList);
myProductList.toBuySweats();

delete myProductList.toBuySweats; // удаление метода обьекта
console.log(myProductList);
// myProductList.toBuySweats(); // выдаст ошыбку потому что мы удалили этот метод

// доступ к обьекту через ключивое слово "this"

const product = {
    type: "wellness and spa",
    category: "hair care",
    prouctName: "shampoo",
    price: 5,
    showProductName() {
        console.log(this.prouctName); // внутри обьекта обращаемся через "this"
    },

    changePrice(value) {
        this.price = value; // внутри обьекта обращаемся через "this"
    }


}

// за пределами обьекта обращаемся к нему по имени

product.showProductName();

product.changePrice(10);
console.log(product);

// перебор обьектов

// цикл for...in - только для объектов, перебирает ключи объекта
//          {OBJECT}                       [ARRAY]
// for (let key in object) { || for (let el of array) {
//     // statements         ||       // statements
// }                         || }

const myCars = {
    audi: "1", bmw: "2", amborghini: "3", mercedes: "4",
}

for (const key in myCars) {
    console.log(key);
}

/// ... - spread

// 1 - во время вызщва функции, для передачи массива элементов отдельными аргументами

const test1 = [12, 15, 21, 13, 19, 33, 11, 18];
const minTest1 = Math.min(test1);
console.log(minTest1); // NaN - математичичские методы не могут перебирать массив самомтоятельно 

const minTest2 = Math.min(...test1);
console.log(minTest2); // 11 - для применения математических методов к массиву, его необходимо распылить с помощью spread оператора

// 2 - альтернатива метода - slice(); 

const marvelHeroes = [
    "Captain Marvel",
    "Thanos",
    "Black Panter",
    "Goose the Cat",
    "Black Widow",
    "Captain America"
];

console.log("исходный массив", marvelHeroes);

const newMarvelHeroes = marvelHeroes; // копия по ссылке
console.log("исходный массив", newMarvelHeroes);

marvelHeroes[0] = 1; // изменение исходного массива
console.log("исходный массив", newMarvelHeroes); // присваевание по ссылке, все изменения в исходном массиве будут отражены в его копии

const sliceCopyOfMarvelHeroes = marvelHeroes.slice(); // независимая копия 
console.log(sliceCopyOfMarvelHeroes); // 

marvelHeroes[1] = 2;
console.log(sliceCopyOfMarvelHeroes);

console.log("исходный массив", marvelHeroes); 

const spreadCopyOfMarvelHeroes = [...marvelHeroes]; // независимая копия исходного массива
console.log(spreadCopyOfMarvelHeroes);

marvelHeroes[2] = 3; // изменение исходного массива
console.log("исходный массив", marvelHeroes);
console.log(spreadCopyOfMarvelHeroes); 

const copyWithNewElements = [...marvelHeroes, 4, 5, 6]; // независимая кория + новые елементы 
console.log(copyWithNewElements);

// конкатенация массивов (полностью)

const firstNum = [1, 2, 3];
const secondNum = [4, 5, 6];

const allNums = firstNum.concat(secondNum);
console.log(allNums);

const newAllNums = secondNum.concat(firstNum);
console.log(newAllNums);

const spreadAllNums = [...firstNum, ...secondNum];
console.log(spreadAllNums);

const newSpreadAllNums = [...secondNum, ...firstNum];
console.log(newSpreadAllNums);

// конкатенация массивов (частично)

const updateNums = [...firstNum.slice(1, 2), ...secondNum.slice(-1)];
console.log(updateNums);

const newUpdateNums = [100, ...firstNum.slice(-1), "javascript", 3, ...secondNum.slice(0, 1), 1000];
console.log(newUpdateNums);

// 3 - альтернатива Object.assign();

const mod1 = {test1: 2, test2: 4, test4: 6,}

const mod2 = {test1: 3, test3: 8,}

const mod3 = Object.assign({}, mod1, mod2);
console.log(mod3); // {test1: 3, test2: 4, test4: 6, test3: 8}

const mod4 = Object.assign({}, mod2, mod1);
console.log(mod4); // {test1: 2, test3: 8, test2: 4, test4: 6}

const spreadMod = {...mod1, ...mod2};
console.log(spreadMod); // {test1: 3, test2: 4, test4: 6, test3: 8}

const newSpreadMod = {...mod2, ...mod1};
console.log(newSpreadMod); //{test1: 2, test3: 8, test2: 4, test4: 6}

const a = {x: 1, y: 2};
const b = {x: 0, z: 3};
const c = {x: 5, j: 10, ...a, z: 15, ...b};
//         x: 5, j: 10,
//         x: 1,      , y: 2, 
//                          , z: 15,
//         x: 0,      ,     , z: 3
//         x: 0, j: 10, y: 2, z: 3
console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// ...rest(сбор аргументов)

const showTestScores = function(...args) {
    console.log(args)
};

showTestScores(1, 2, 3);
showTestScores("SOCCER", "BASKETBALL", "FOOTBALL", "BASEBALL", "REGBY");

const params = function(name, score, ...args) {
    console.log(name);
    console.log(score);
    console.log(args);
}

params("Andrei", 22, 0, 1, 0, 1, 1, 0, 0, 0 , 1, 0);

// Д Е С Т Р У К Т У Р И З А Ц И Я объектов {object}

const hotel = {
    hotelName: "rixos",
    stars: 3,
    capacity: 1000,
}

console.log(hotel);

const {hotelName, stars, capacity} = hotel;

console.log(stars);

const myProducts = {
    fruits: "apples",
    vegetables: "tomato",
    meat: "chicken",
}

const {fruits: Myfruits, vegetables, meat} = myProducts;

console.log(Myfruits);

// Д Е С Т Р У К Т У Р И З А Ц И Я массивов

const rgb = [100, 205, 200];
const [red, green, blue] = rgb;
console.log(red);

const rgb1 = [123, 15, 255];
const [red1, ...colors] = rgb1;
console.log(red1);
console.log(colors);

const rgb2 = [1, 15, 150];
const [, green1] = rgb2;
console.log(green1);

