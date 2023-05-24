//1) створити в Html розмітці пустий список та додати у цей список продукти з масиву "ingredients"
// (створювати лішки за допомогою методу createElement("li"))
// до кожної лішки застосувати класс item(потрібно створити у css)  за допомогою JS
// Додати кожній лішці текстовий контент у вигляді одного з продуктів
//  та додати ці лішки до списку використовуючи синтаксис (...) додавати щось до дом дерева можна тільки один раз.

const list = document.querySelector("#list");
const list1 = document.querySelector("#list1");
const imgs = document.querySelector("#imgs");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.map((item) => {
  const ingrEl = document.createElement("li");
  ingrEl.classList.add("item");
  ingrEl.textContent = `${item}`;
  return ingrEl;
});

console.log(ingredientsList);

list.append(...ingredientsList);

//2) створити список в HTML розмітці та за допомогою JS коду додати у цей список справи на тиждень
// використовуючи  синтаксис похилих крапок та insertAdjacentHTML
//  додати стилі на ваш розсуд (класи можна одразу додавати коли створюєте розмітку li)

const events = ["click", "input", "submit", "keyup", "keydown"];

const markup = events
  .map((item) => {
    return `<li class="item2"> ${item}</li>`;
  })
  .join(" ");

list1.insertAdjacentHTML("beforeend", markup);

//3) вивести масив данних на екран будь-яким зручним способом
// додати стилі
