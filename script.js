// Инициализируем dom-элементы, с которыми будем работать
let numberInputs = document.querySelectorAll('input');

// let buttonLess = document.querySelector('#button_less');
// let buttonMore = document.querySelector('#button_more');
let lessMoreButtons = document.querySelectorAll('button');
let lessValue = document.querySelector('#less_value');
let currentValue = document.querySelector('#current_value');
let moreValue = document.querySelector('#more_value');

// Стандартные значения и функции
let updateArray = (minimum, maximum) =>
{
    arrayOfNums = [];

    for (let i = minimum; i <= maximum; i++)
        arrayOfNums.push(i);
}

let updateIndexes = () =>
{
    minimumIndex = 0;
    middleIndex = Math.floor((arrayOfNums.length - 1) / 2);
    maximumIndex = arrayOfNums.length - 1;
}

let updateValues = () =>
{
    lessValue.textContent = arrayOfNums[minimumIndex];
    currentValue.textContent = arrayOfNums[middleIndex];
    moreValue.textContent = arrayOfNums[maximumIndex];
}

let arrayOfNums;

let minimumIndex;
let middleIndex;
let maximumIndex;

let minimum = Number(numberInputs[0].value);
let maximum = Number(numberInputs[1].value);

updateArray(minimum, maximum);
updateIndexes();
updateValues();

// Добавляем ивенты для изменения значений
for (let i = 0; i < numberInputs.length; i++)
{
    numberInputs[i].addEventListener('input', () => 
    {
        minimum = Number(numberInputs[0].value);
        maximum = Number(numberInputs[1].value);

        updateArray(minimum, maximum);
        
        updateIndexes();
        
        updateValues();
    });
}

for (let i = 0; i < lessMoreButtons.length; i++)
{
    lessMoreButtons[i].addEventListener('click', () =>
    {
        let isLessButton = lessMoreButtons[i].innerHTML == '&lt;';
        let isMoreButton = lessMoreButtons[i].innerHTML == '&gt;';
        
        if (isLessButton)
            maximumIndex = middleIndex;
        if (isMoreButton)
            minimumIndex = middleIndex;

        middleIndex = Math.round((minimumIndex + maximumIndex) / 2);

        // Анимация
        $('span').slideUp(100, () =>
        {
            updateValues();
            
            $('span').slideDown(100);
        });
    });
}

// buttonLess.addEventListener('click', () =>
// {
//     maximumIndex = middleIndex;
//     middleIndex = Math.floor((maximumIndex + minimumIndex) / 2);

//     updateValues();
// });

// buttonMore.addEventListener('click', () =>
// {
//     minimumIndex = middleIndex;
//     middleIndex = Math.round((maximumIndex + minimumIndex) / 2);

//     updateValues();
// });