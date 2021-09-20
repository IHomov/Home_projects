/*Матросы пиратского корабля "Арабелла" во время похода пьют ром и едят мясо.

Написать скрипт, который проанализирует недельный расход мяса и рома и найдет дни, в которые было выпито и съедено больше всего за неделю. Это могут быть два разных дня, в один день сьели больше мяса, в другой - больше рома.

Недельный расход подготовить с использованием функции Math.random(), сам расход должен представлять собой массив объектов вида:

[ {...}, ..., { meat: 110, rum: 45, day: 1}, ..., {} ] где

meat - съедено мяса, кг

rum - выпито рома, кг

day - день недели от 1 до 7

Результат анализа необходимо вывести в консоль.*/


let periodLenght = 7;
let tableData = fillArray();
let result = scanDasta(tableData);

console.log(`Максимум мяса было сьедено: ${result.meatMax}кг за ${result.meatMaxDay} дней, максимум рома было выпито: ${result.rumMax}литров за ${result.rumMaxDay} дней`)



function fillArray() {
    let piratTable = [];

    for (let i = 0; i <= periodLenght; i++){
        rumConsumption = Math.round(Math.random()* 100);
        meatConsumption = Math.round(Math.random() * 100);
        piratTable.push({ rum: rumConsumption, meat: meatConsumption, day: i });
    }
    return piratTable;
}

function scanDasta(data) {
    let meatMax = 0;
    let rumMax = 0;
    let meatMaxDay, rumMaxDay;

    for (let item of data) {

        if (item.rum > rumMax) {
            rumMax = item.rum;
            rumMaxDay = item.day;
        }
    

        if (item.meat > meatMax) {
            meatMax = item.meat;
            meatMaxDay = item.day;
        }
    }

    return {
        meatMax,
        rumMax,
        meatMaxDay,
        rumMaxDay,
    }
}