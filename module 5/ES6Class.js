"use strict";

// ОБЪЯВЛЕНИЕ ES6 класса

class Hero {
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    };
}; 

const newHero = new Hero("andrei", 450);
console.log(newHero); // Hero {name: "andrei", xp: 450}

console.log("сравнение прототипа экземпляра и объекта функции-конструктора: ", 
newHero.__proto__ === Hero.prototype); // true

// МЕТОДЫ КЛАССА - альтернатива методов конструктора через prototype

class Hero2 {
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    };
    gameXp(amount) {
        console.log(`${this.name}, gained ${amount}, game points`);
        this.xp += amount;
        console.log(this.xp);                                                                                       
    };
};

const newHero2 = new Hero2("andrei2", 210);
console.log(newHero2);

newHero2.gameXp(100);

// СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ - не идут в prototype
// не работает в браузерах, кроме Хрома (от 74 версии)

class Hero3 {
    //доступны только конструктору
    static staticProp = "abc";
    static staticMethod() {};
    //доступны только конструктору
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    };
};

const hero3 = new Hero3("andrei3", 121);
console.log(hero3);

// ГЕТТЕРЫ И СЕТТЕРЫ - применяются для внешнего доступа к методам объекта
// имя одно для гета и сета, не должно совпадать со именами св-в экземляров
// применяются в разработке, когда имена свойств могут меняться, согласно изменений спецификации
// а имена геттеров и сеттеро останутся неизменными

class Hero4 {
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    };
    // SETTER записывает
    set alpha(newName) {
        this.name = newName;
    };
    // ===================== //
    // changeName(name) {
        // this.name = name;
    // };

    // GETTER читает
    get alpha() {
        return console.log(this.name);
    }
    // ===================== //
    // getName() {
    //     return console.log(this.name);
    // };
};

const hero4 = new Hero4("andrei4", 123);
console.log(hero4);

// обычный метод класса
// hero4.changeName("lucas"); // lucas
// hero4.getName();

hero4.alpha = "jhonny"; // SETTER
hero4.alpha; // GETTER

// ПУБЛИЧНЫЕ СВОЙСТВА И МЕТОДЫ (public class fields)

class Hero5 {
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    };

    // на экземпляр, не в prototype, не нужно привязывать контекст
    a = 5;
    gameXp = (amount) => {
        this.xp += amount;
        console.log(this.xp);
    };
    // на экземпляр, не в prototype, не нужно привязывать контекст

    // gameXp(amount) {
    //     this.xp += amount;
    //     console.log(this.xp);
    // };
};


const hero5 = new Hero5("jhon", 142);
console.log(hero5);

const fn = function(callback) {
    callback(13);
};

// fn(hero5.gameXp.bind(hero5));

// вызов публичного метода не нуждается в 
// привязке контекста

fn(hero5.gameXp) // 155