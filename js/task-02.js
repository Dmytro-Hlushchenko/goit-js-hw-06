const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul#ingredients')

const array = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  return item;
  });

listEl.append(...array);