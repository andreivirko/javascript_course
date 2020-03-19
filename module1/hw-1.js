"use strict";

// ========= 1 =========
// объяви переменную, которая должна принимать значение с названием животного
// выведи каждое значение этой переменной в консоль
// присвой 10 разных значений

let a;
a = "monkey";
console.log(a);
console.log(typeof a);
a = "tiger";
console.log(a);
console.log(typeof a);
a = "lion";
console.log(a);
console.log(typeof a);
a = "elephant";
console.log(a);
console.log(typeof a);
a = "leopard";
console.log(a);
console.log(typeof a);
a = "dog";
console.log(a);
console.log(typeof a);
a = "cat";
console.log(a);
console.log(typeof a);
a = "rat";
console.log(a);
console.log(typeof a);
a = "mouse";
console.log(a);
console.log(typeof a);
a = "racoon";
console.log(a);
console.log(typeof a);

// ========= 2 =========
// объяви переменную со значением своего имени, которую нельзя перезаписать
const myFirstName = "Andrei";
console.log(myFirstName);

// ========= 3 =========
// создай 5 переменных с названиями любимых песен, так, чтобы их нельзя было изменить
const theBestSong1 = "Godzilla";
console.log(theBestSong1);
const theBestSong2 = "Bandit";
console.log(theBestSong2);
const theBestSong3 = "Thotiana";
console.log(theBestSong3);
const theBestSong4 = "Suey";
console.log(theBestSong4);
const theBestSong5 = "Suge";
console.log(theBestSong5);


// ========= 4 =========
// создай разные переменные с значениями: 3, "Студент", true, undefined, null 
// выведи значения переменных и тип данных каждого значения в консоль
let newVar = 3;
console.log(newVar);
console.log(typeof newVar);

newVar = "student";
console.log(newVar);
console.log(typeof newVar);

newVar = true;
console.log(newVar);
console.log(typeof newVar);

newVar = undefined;
console.log(newVar);
console.log(typeof newVar);

newVar = null;
console.log(newVar);
console.log(typeof newVar);



// ========= 5 =========
// проверь на число каждое значение переменной, созданной в предыдущем задании
// и выведи это в консоль

newVar = 3;
console.log(newVar);
console.log(isNaN(newVar)); // false

newVar = "student";
console.log(newVar);
console.log(isNaN(newVar)); // true

newVar = true;
console.log(newVar);
console.log(isNaN(newVar)); // false cos it become a number 1

newVar = undefined;
console.log(newVar);
console.log(isNaN(newVar)); // true cos it become a NaN

newVar = null;
console.log(newVar);
console.log(isNaN(newVar)); // false cos it become to 0

