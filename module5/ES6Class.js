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

// НАСЛЕДОВАНИЕ

// class Child extends Parent {

// }

class Animal {
    constructor(name) {
        this.name = name;
    };
    move() {
        console.log(`i am ${this.name} moving`);
    };
};

class Dog extends Animal {
    constructor(name, bree) {
        super(name);
        this.bree = bree;
    };
    bark() {
        console.log(`woof`);
    };
    moveAndMakeSound() {
        super.move();
        this.bark();
    };
};

const dog = new Dog("james", "husky"); 
console.log(dog);

dog.move();
dog.bark();
dog.moveAndMakeSound();

// Приватные и защищённые методы и свойства

// Приватные и защищённые методы и свойства
// Внутренний интерфейс – методы и свойства, доступные из других методов класса, 
// но не снаружи класса. 

// Внешний интерфейс – методы и свойства, доступные снаружи класса.

class Auto {
    fuel = 0; // публичное свойство
    _oil = 1;
    set oil(value) {
        if (value < 0) throw new Error("отрицательное значение");
        this._oil = value;
    };
    get oil() {
        return this._oil;
    }
    constructor(speed) {
        this.speed = speed; // публичное свойство
        console.log(speed)
    };
};

const mazda = new Auto(200);
console.log(mazda);

mazda.fuel = 20; // публичное свойство
mazda.speed = 170; // публичное свойство
// mazda.oil = -2;
// console.log(mazda.oil); // Auto.set oil [as oil]

// свойство только для чтения

class Moto {
    constructor(power) {
        this._power = power;
    };
    get power() {
        this._power;
    };
};

const harley = new Moto(200);
console.log(harley);

// harley.power = 100; // Cannot set property 
// power of #<Moto> which has only a getter

// приватные свойства

// class CoffeeMachine {
//     #water = 200;
//     // #checkWater(value) {
//     //     if (value < 0) throw new Error("отрицательное значение");
//     //     if (value > this.#water) throw new Error ("слишком много воды");
//     // };
// };

// const delonghi = new CoffeeMachine();
// delonghi.#water = 1000;
// // delonghi.#checkWater();
// console.log(delonghi);



