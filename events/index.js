const firstButton = document.querySelector("#main-button");
console.log(firstButton);
const secondButton = document.querySelector("#secondary-button");
console.log(secondButton);

firstButton.addEventListener("click", () => {
  //
  // handleClick();
  maxImage();
});

// document.getElementById("main-button").onclick = function () {
 // window.location.href = "#user-form";
// };

secondButton.addEventListener("click", () => {
  //
  // handleClick();
  minImage();
});

function handleClick() {
  alert("you clicked the button");
}

const image = document.querySelector(".js-img");

function minImage() {
  // image.style.border = "10px solid red";
  // image.style.transform = "scale(0.5)";
  image.classList.toggle("active");
}

function maxImage() {
  image.classList.toggle("inactive");
}

// Обработчик событий в контексте исполнения обьектов

const user = {
  name: "Andrei",
  showName() {
    console.log(this);
    alert(`my name is ${this.name}`);
  },
};

// user.showName();

// firstButton.addEventListener("click", () => {
//     user.showName();
// });

firstButton.addEventListener("click", user.showName.bind(user));

const addButton = document.querySelector(`button[data-action="add"]`);
const removeButton = document.querySelector(`button[data-action="remove"]`);
const clickButton = document.querySelector("#newBtn");

function newHandleclick() {
  alert("hello guys");
  clickButton.style.color = "red";
}

addButton.addEventListener("click", () => {
  clickButton.addEventListener("click", newHandleclick);
});

addButton.addEventListener("focus", () => {
  addButton.style.color = "red";
});

addButton.addEventListener("blur", () => {
  addButton.style.color = "green";
});

removeButton.addEventListener("click", () => {
  clickButton.removeEventListener("click", newHandleclick);
});

const clearInput = document.querySelector('button[data-action="clear"]');
console.log(clearInput);

const logList = document.querySelector(".log-list");
console.log(logList);

function logMessage(event) {
  const div = document.createElement("div");
  div.style.border = "1px solid";
  const title = document.createElement("h2");
  console.log(title);
  title.textContent = `произошло событие ${event.type}`;
  const p = document.createElement("p");
  p.textContent = `значение ключа(клавиша которая нажата) ${event.key}, свойство код ${event.code}`;
  div.prepend(title, p);
  logList.appendChild(div);
}

window.addEventListener("keydown", logMessage);
window.addEventListener("keyup", logMessage);

clearInput.addEventListener("click", () => {
  logList.innerHTML = "";
});

// действия браузера по умолчанию

const form = document.querySelector(".form");
const loginInput = document.querySelector(`input[type="text"]`);
const passwordInput = document.querySelector(`input[type="password"]`);

function handleSubmit(event) {
  event.preventDefault();

  let login = loginInput.value;
  let password = passwordInput.value;

  if (login === "" || password === "") {
    return alert("please fill both fields");
  }
  alert("thank you for registration");
  console.log(login, password);
}

form.addEventListener("submit", handleSubmit);

// загрузка документов

document.addEventListener("DOMContentLoaded", () => {
  alert("дом построен");
});

window.addEventListener("load", () => {
  alert("стили отрисованы");
});

window.addEventListener("beforeunload", () => {
  alert("действительно ли вы хотите покинуть эту страницу?");
});
