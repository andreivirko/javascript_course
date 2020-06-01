import users from "./users.js";
console.log(users);

const user = {
    name: "Cristiano",
    lastName: "Ronaldo",
    avatar: "./image/5.jpeg",
    age: "33",
    height: "190",
    eyeColor: "brown",
};

// ОБРАТИМСЯ К УЗЛУ-ЭЛЕМЕНТУ div, в который будут записываться профили 
// наших юзеров

const profileContainer = document.querySelector(".profile-container");
console.log(profileContainer);

const profile = createUserProfile(user);
profileContainer.appendChild(profile);

{/* <div class="user-profile">
        <img class="avatar" src="./img/1.jpeg" alt="">
            <ul class="intro">
                <li><b>Name:</b>Omar Halem</li>
                <li><b>Phone:</b>999-888-77-66</li>
                <li><b>Email:</b>omar.halem@gmail.com</li>
                <li><b>Location:</b>Egypt, Aleksandria</li>
            </ul>
    </div>  */}

// СОЗДАДИМ ФУНКЦИЮ, ГЕНЕРИРУЮЩУЮ ПРОФИЛЬ ЮЗЕРА

function createUserProfile({name, lastName, avatar, age, height, eyeColor}) {
     // сначала создадим обертку для профиля юзера
    const container = document.createElement("div");
    container.classList.add("user-profile");
    // console.log(container);

    // создаем img для аватара (фото профиля)
    const img = document.createElement("img");
    img.classList.add("avatar");
    img.src = avatar;
    img.alt = "profile picture";

    // создаем список с инфо пользователя
    const ul = document.createElement("ul");
    ul.classList.add(".intro");

    // объявляем переменные, генерирующие поля со значениями
    const nameField = fieldGenerator("Name: ", name);
    const lastNameField = fieldGenerator("Last Name: ", lastName);
    const ageField = fieldGenerator("Age: ", age);
    const heightField = fieldGenerator("Height: ", height);
    const eyeColorField = fieldGenerator("Eye Color: ", eyeColor);

    // записываем в список динамичные элементы из функции createInfoItem
    // с присвоением деструктуризированных значений из объекта user 
    // полученного юзера (имитация БД)
    ul.append(nameField, lastNameField, ageField, heightField, eyeColorField);

    // записываем аватар и список с данными в профиль юзера
    container.append(img, ul);

     // возвращаем готовый профиль с инфо юзера
    return container;
};

// СОЗДАДИМ ФУНКЦИЮ ДЛЯ ГЕНЕРАЦИИ ПОЛЯ С ДАННЫМИ ЮЗЕРА

function fieldGenerator(b, text) {
    // создаем динамичный узел-элемент списка для функции createUserProfile
    const li = document.createElement("li");

    // в элементе тег b с описанием
    const title = document.createElement("b");
    title.textContent = `${b}`;

    // создаем текстовый элемент для указания данных юзера
    const itemText = document.createTextNode(text);
    // записываем в элемент значение тега b (описание поля) и значение поля 
    // юзера

    li.append(title, itemText);
     // возвращаем готовый элемент списка
    return li;
};