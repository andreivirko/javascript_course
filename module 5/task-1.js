// "use strict";

// // Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
// // В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения 
// // полей login и email объекта который его вызвал.

// // тут пиши функцию-конструктор
// // тут пиши метод конструктора в prototype 
// // тут проверка работоспособности кода

// const Account = function(login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function() {
//     return console.log(`login: ${this.login}, email: ${this.email}`);
// }

// console.log(Account.prototype.getInfo); // function
// const mango = new Account('Mangozedog','mango@dog.woof');
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// const poly = new Account('Poly', 'poly@mail.com');
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

