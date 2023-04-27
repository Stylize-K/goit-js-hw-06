
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const list = document.querySelectorAll('.item');
console.log('Number of categories:', list.length);
// Number of categories: 3


// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

list.forEach(function (elem) {
    let title = elem.firstElementChild.textContent;
    let listLength = elem.lastElementChild.children.length;
    console.log('Category:', title, '\n', 'Elements:', listLength);
})

// Category: Animals 
// Elements: 4
// Category: Products 
// Elements: 3
// Category: Technologies 
// Elements: 5