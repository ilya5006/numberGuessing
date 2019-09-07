// Инициализируем dom-элементы, с которыми будем работать
let numberInputs = document.querySelectorAll('input');

let buttonLess = document.querySelector('#button_less');
let buttonMore = document.querySelector('#button_more');
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

let generateIndexes = () =>
{
    minimumIndex = 0;
    middleIndex = Math.round((arrayOfNums.length - 1) / 2);
    maximumIndex = arrayOfNums.length - 1;
}

let updateValues = () =>
{
    lessValue.textContent = arrayOfNums[minimumIndex];
    currentValue.textContent = arrayOfNums[middleIndex];
    moreValue.textContent = arrayOfNums[maximumIndex];
}

let arrayOfNums;

let minimum = Number(numberInputs[0].value);
let maximum = Number(numberInputs[1].value);

let minimumIndex;
let middleIndex;
let maximumIndex;

updateArray(minimum, maximum);
generateIndexes(arrayOfNums);
updateValues();

// Добавляем ивенты для изменения значений
for (let i = 0; i < numberInputs.length; i++)
{
    numberInputs[i].addEventListener('input', (event) => 
    {
        event.preventDefault();
        minimum = Number(numberInputs[0].value);
        maximum = Number(numberInputs[1].value);

        updateArray(minimum, maximum);
        
        generateIndexes(arrayOfNums);
        
        updateValues();
    });
}

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
