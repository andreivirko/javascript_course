// "use strict";

// // OBJECT

// // let abc = {
// //     1: "a",
// //     2: "b",
// //     3: "c", // property = key : value
// //     // key : value
// // } 

// // console.log(abc);

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