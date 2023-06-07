// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const InputEl = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
	boxesEl.innerHTML = "";
	InputEl.value = "";
}

// Не зміг реалізувати функцію createBoxes(amount), яка приймає число amount. Я оголошую змінну amount в середині функції.

function createBoxes() {
	const amount = InputEl.value;
	let side = 30;
	let markup = "";

	for (let i = 1; i <= amount; i += 1) {
		if (i === 1) {
			const box = `<div style="height: ${side}px; width: ${side}px; background-color: ${getRandomHexColor()};"></div>`;
			markup += box;
		} else {
			side += 10;
			const box = `<div style="height: ${side}px; width: ${side}px; background-color: ${getRandomHexColor()};"></div>`;
			markup += box;
		}
	}
	boxesEl.insertAdjacentHTML("afterbegin", markup);
}

// !!!!! - ДРУГИЙ ВАРІАНТ ФУНКЦІЇ createBoxes(), АЛЕ ТУТ НА КАОЖНІЙ ІТЕРАЦІЇ ВІДБУВАЄТЬСЯ ДОДАВАННЯ ПОТОЧНОГО ЕЛЕМЕНТА В DOM, ЩО НЕ Э ХОРОШОЮ ПРАКТИКОЮ З ПРИВОДУ ОПТИМіЗАЦІЇ - !!!!!

// function createBoxes() {

//   let amount = InputEl.value;
//   let side = 30;

//   for (let i = 1; i <= amount; i += 1) {
//     if (i === 1) {
//       const box = document.createElement("div");
//       box.style.height = `${side}px`;
//       box.style.width = `${side}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       boxesEl.append(box);
//     } else {
//         const box = document.createElement("div");
//         side += 10;
//         box.style.height = `${side}px`;
//         box.style.width = `${side}px`;
//         box.style.backgroundColor = getRandomHexColor();
//         boxesEl.append(box);
//     }
//   }
// }
