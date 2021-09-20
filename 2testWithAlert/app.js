let useranswer = 0;
let userrate = 0;
const countQuestions = 5;
const ArrayQuestions = [
    "Сколько океанов на нашей планете? Введите цифру",
    "Единица измерения силы тока - это:",
    "Сатурн это какая по счету планета от солнца? Введите словом",
    "Как называется угол 90 градусов?",
    "Самая длинная река в мире это  - ",
]
const arrayAnswers = [
    '5',
    'ампер',
    'шестая',
    'прямой',
    'Амазонка',
]

for (let i = 0; i < countQuestions; i++){
    useranswer = prompt(ArrayQuestions[i]);

    if (useranswer == arrayAnswers[i]) {
        userrate += 1;
    }

}
alert(`Тест окончен, количество правильных ответов ${userrate}/5`);