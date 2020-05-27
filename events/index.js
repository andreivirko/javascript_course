const firstButton = document.querySelector("#main-button");
console.log(firstButton);
const secondButton = document.querySelector("#secondary-button");
console.log(secondButton);

firstButton.addEventListener("click", () => {
  //
  // handleClick();
  maxImage();
});

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

function  newHandleclick() {
  alert("hello guys");
  clickButton.style.color = "red";
};

addButton.addEventListener("click", () => {
  clickButton.addEventListener("click", newHandleclick);
});

removeButton.addEventListener("click", () => {
  clickButton.removeEventListener("click", newHandleclick);
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
};

form.addEventListener("submit", handleSubmit);