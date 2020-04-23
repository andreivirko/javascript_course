"use strict";

// procedure code example

const boots = "nike";
// =================================== //
const shirts = "addidas";
// =================================== //
const bottle = "water";
// =================================== //
const shorts = "cappa";
// =================================== //
const goToSoccer = function(boots, shirts, bottle, shorts) {
    console.log(boots, shirts, bottle, shorts);
};

goToSoccer(boots, shirts, bottle, shorts); // nike addidas water cappa

// object oriented programming (oop)

const goToTrain = {
    boots: "nike",
    shirts: "addidas",
    bottle: "water",
    shorts: "cappa",
    getValues() {
        return console.log(this.boots, this.bottle, this.shirts, this.shorts);
    },
};

goToTrain.getValues(); // nike water addidas cappa

// Идеологически, ООП это подход к программированию как к моделированию, 
// решающий основную задачу - структурирование информации с точки зрения 
// управляемости, что существенно улучшает контроль процесса 
//моделирования. Это крайне важно при при реализации крупных проектов.

// main definitions oop

// CLASS - это набор свойств и методов класса, доступных для использования при работе с экземпляром.
// это отдельный представитель класса, имеющий конкретное состояние и поведение, 
// полностью определяемое классом. Это то, что создано по чертежу, то есть по описанию из класса.
// способ описания сущности, определяющий состояние и поведение, зависящее от этого состояния, 
// а также правила для взаимодействия с данной сущностью (контракт).


// EXEMPLAR - это набор свойств и методов класса, доступных для использования при работе
// с экземпляром.
//это отдельный представитель класса, имеющий конкретное состояние и поведение, 
// полностью определяемое классом. Это то, что создано по чертежу, то есть по описанию из класса.


// INTERFACE - это набор свойств и методов класса, доступных для использования при работе
//  с экземпляром.

// four paradigms of oop

// 1.) incaptulation - это свойство системы, позволяющее объединить данные и методы, 
// работающие с ними, в классе и скрыть детали реализации от пользователя.

// 2.) abstraction - это способ выделить набор значимых характеристик объекта, исключая из 
// рассмотрения незначимые.

// 3.) inferitance - то свойство системы, позволяющее описать новый класс на основе уже существующего,
// с частично или полностью заимствующимся функционалом. Класс, от которого производится 
// наследование, называется базовым, родительским или суперклассом. Новый класс называется потомком, 
// наследником или производным классом.

// 4.) polimarfism - это свойство системы позволяющее использовать объекты с одинаковым интерфейсом 
// без информации о типе и внутренней структуре объекта. Позволяет переопределять в классах 
// наследниках реализации методов базового класса

// constructors 

const Hotel = function(name, stars, capacity) {
    this.name = name;
    this.stars = stars;
    this.capacity = capacity;
};

// method construct

const rixos = new Hotel ("rixos", 5, 1000);
console.log(rixos); // Hotel {name: "rixos", stars: 5, capacity: 1000}

const Hilton = new Hotel ("hilton", 4, 3000);
console.log(Hilton); // Hotel {name: "hilton", stars: 4, capacity: 3000}

const holidayInn = new Hotel ("holidayInn", 5, 11000);
console.log(holidayInn); // Hotel {name: "holidayInn", stars: 5, capacity: 11000}

// method call

// const hotel = Hotel("motel", 3, 10); // cannot set properties

// added methods

rixos.greeting = function(guestName) {
    console.log(`hello ${guestName}, welcome to ${this.name}`);
};

rixos.greeting("Andrei"); // hello Andrei, welcome to rixos

Hilton.guestCount = 0;

Hilton.addGuest = function(amount) {
    return console.log(this.guestCount += amount);
};

Hilton.addGuest(200); // 200
Hilton.addGuest(100); // 300
Hilton.removeGuests = function(amount) {
    return console.log(this.guestCount -= amount);
};

Hilton.removeGuests(10); // 290

// practice

const salesOne = {
    name: "Silpo",
    sales: 100,
    cell(product) {
        this.sales += 1;
        return `manager ${this.name}, sold ${product}`;
    },
};

console.log(salesOne.sales); // 100
console.log(salesOne.cell("apples")); // // manager Silpo, sold apples
console.log(salesOne.sales); // 101
console.log(salesOne.cell("oranges")); // manager Silpo, sold oranges
console.log(salesOne.sales); // 102

const salesTwo = {
    name: "ATB",
    sales: 400,
    cell(product) {
        this.sales += 1;
        return `manager ${this.name}, sold ${product}`;
    },
};

console.log(salesTwo.sales); // 400
console.log(salesTwo.cell("bananas")); // // manager Silpo, sold bananas
console.log(salesTwo.sales); // 401
console.log(salesTwo.cell("cellphone")); // manager Silpo, sold cellphone
console.log(salesTwo.sales); // 402

const Manager = function(name = "manager", sales = 0) {
    this.name = name;
    this.sales = sales;
    this.sale = function(product) {
        this.sales += 1;
        return `manager ${this.name}, sold ${product}`;
    };
};

const Andrei = new Manager("Andrei", 100);
console.log(Andrei);

console.log(Andrei.sales); // 100
console.log(Andrei.sale("mandarins")); // manager Andrei, sold mandarins
console.log(Andrei.sale("iPhone")); // manager Andrei, sold iPhone
console.log(Andrei.sales); // 102

const John = new Manager ("John", 200);
console.log(John); // Manager {name: "John", sales: 200, sale: ƒ}

console.log(John.sales); // 200
console.log(John.sale("mandarins")); // manager John, sold mandarins
console.log(John.sale("iPhone")); // manager John, sold iPhone
console.log(John.sales); // 202