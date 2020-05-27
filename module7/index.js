"use strict";

console.log(document);
console.dir(document);

// const button = document.querySelector(".js-btn");
const button = document.querySelector('button[data-action="action"]');

const menu = document.querySelectorAll(".menu-item");
console.log(menu);
const home = document.querySelector(".menu-item");
console.log(home);

button.addEventListener("click", () => {
    updateImage();
    setActiveItem();
})

console.log(button.textContent);
button.textContent = "hello";

const text = document.querySelector(".p-text");
text.textContent = "hello world";

// const text1 = document.querySelector(".p-text");
// text1.textContent = "hello";

const image = document.querySelector(".js-img");
console.log(image);
console.dir(image);

function updateImage() {
    image.height = image.height / 1.5;
    image.width = image.width / 1.5;

    // image.alt = "hi my name is andrei";
    image.setAttribute("alt", "hi my name is andrei");
    image.setAttribute("src", "https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
    // image.src = "https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
};

console.log(image.attributes);

// проверяет наличие аттрибута, возвращает true или false
console.log(image.hasAttribute("href"));

// получает значение атрибута и возвращает его
console.log(image.getAttribute("alt"));

// устанавливает атрибут
image.setAttribute("alt", "image")
console.log(image.alt);

// удаляет атрибут
image.removeAttribute("alt");
console.log(image.alt);

console.log(image.hasAttribute("alt"));

function setActiveItem() {
    home.classList.add("active");
};

function setToggleItem() {
    home.classList.toggle("active");
};

const header = document.querySelector(".container");
console.log(header);

console.log(header.classList);

// методы массива свойства classList
console.log(header.classList.contains("header"));
console.log(header.classList.add("header"));
console.log(header.classList.remove("header"));
console.log(header.classList.replace("container", "header"));
console.log(header.classList.toggle("header"));

const gallery = document.querySelector(".main_list");
console.log(gallery);

const newGalleryItem = document.createElement("li");
const itemImage = document.createElement("img");
const itemText = document.createElement("p");
itemText.textContent = "lorem";
newGalleryItem.append(itemImage, itemText);
console.log(newGalleryItem.classList.add("main_item"));
console.log(newGalleryItem);
itemImage.setAttribute("src", "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
itemImage.setAttribute("height", "270");
itemImage.setAttribute("width", "300");
console.log(itemImage.classList.add("js-img"));
console.log(itemImage.src);

// клонирование элементов

const clone = newGalleryItem.cloneNode(true);
console.log(clone);
// gallery.prepend(newGalleryItem, clone);

const galleryTitle = document.createElement("h2");
galleryTitle.textContent = "Our Gallery"
gallery.before(galleryTitle);

// удаление элемента

// старый способ
// gallery.removeChild(clone);

// новый способ
clone.remove();

// свойство innerHTML
const innerItem = '<li><img src="#"><p>lorem lorem lorem</p></li>';
gallery.innerHTML += innerItem;

// метод insertAdjacentHTML()

// добавляем новый элемент перед списоком
gallery.insertAdjacentHTML("beforebegin", '<h2>insertAdjacentHTML</h2>');

// добавляем элемент в начало внутри списка 
gallery.insertAdjacentHTML("afterbegin", '<li>insertAdjacentHTML</li>');

// добавляем элемент в конец внутри списка 
gallery.insertAdjacentHTML("beforeend", '<li>insertAdjacentHTML</li>');

// добавляем новый элемент после списка
gallery.insertAdjacentHTML("afterend", '<p>insertAdjacentHTML</p>');

// метод insertAdjacentElement(position, elem)

// добавляем новый элемент перед списоком
gallery.insertAdjacentElement("beforebegin", newGalleryItem);

// добавляем элемент в начало внутри списка 
gallery.insertAdjacentElement("afterbegin", newGalleryItem);

// добавляем элемент в конец внутри списка 
gallery.insertAdjacentElement("beforeend", newGalleryItem);

// добавляем новый элемент после списка
gallery.insertAdjacentElement("afterend", newGalleryItem);

// метод insertAdjacentText(position, text)

// добавляем новый элемент перед списоком
gallery.insertAdjacentText("beforebegin", "lorem1");

// добавляем элемент в начало внутри списка 
gallery.insertAdjacentText("beforebegin", "lorem2");

// добавляем элемент в конец внутри списка 
gallery.insertAdjacentText("beforebegin", "lorem3");

// добавляем новый элемент после списка
gallery.insertAdjacentText("beforebegin", "lorem4");