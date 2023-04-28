// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const scrollEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

scrollEl.addEventListener('input', () => {
    textEl.style.fontSize = `${scrollEl.value}px`;
});
