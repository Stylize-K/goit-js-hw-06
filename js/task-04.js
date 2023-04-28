
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
btnMinus.addEventListener('click', handleMinus);
btnPlus.addEventListener('click', handlePlus);

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
let counterValue = 0;

// Оновлюй інтерфейс новим значенням змінної counterValue.
function handleMinus() {
    counterValue -= 1;
    counter.textContent = counterValue;
} 

function handlePlus() {
    counterValue += 1;
    counter.textContent = counterValue;
} 