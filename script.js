// Инициализируем dom-элементы, с которыми будем работать
let buttonLess = document.querySelector('#button_less');
let buttonMore = document.querySelector('#button_more');
let lessValue = document.querySelector('#less_value');
let currentValue = document.querySelector('#current_value');
let moreValue = document.querySelector('#more_value');

// Стандартные значения
const arrayOfNums = [];
for (let i = 1; i <= 100; i++)
    arrayOfNums.push(i);

let minimumIndex = 0;
let middleIndex = Math.round((arrayOfNums.length - 1) / 2);
let maximumIndex = arrayOfNums.length - 1;

let updateValues = () =>
{
    lessValue.textContent = arrayOfNums[minimumIndex];
    currentValue.textContent = arrayOfNums[middleIndex];
    moreValue.textContent = arrayOfNums[maximumIndex];
}

updateValues();

// Добавляем ивенты для изменения значений
buttonLess.addEventListener('click', () =>
{
    maximumIndex = middleIndex;
    middleIndex = Math.floor((maximumIndex + minimumIndex) / 2);
    updateValues();
});

buttonMore.addEventListener('click', () =>
{
    minimumIndex = middleIndex;
    middleIndex = Math.round((maximumIndex + minimumIndex) / 2);
    updateValues();
});