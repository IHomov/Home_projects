// variables
let operation = document.querySelectorAll('button');
// event handler
operation.forEach( (item) => item.addEventListener("click", function(e) { 
	Calculation(item);
}));


// buttonPlus.addEventListener('click', Calculation);
// buttonMinus.addEventListener('click', Calculation);
// buttonMultiply.addEventListener('click', Calculation);
// buttonDivide.addEventListener('click', Calculation);
// buttonAnswer.addEventListener('click', Calculation);
// buttonClear.addEventListener('click', Calculation);

// Describe  function calculation
let op;
function Calculation(item) {
    let result;
    let num1 = Number(document.querySelector('enter_text'));
    let num2 = Number(document.querySelector('enter_text'));

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case 'C':
            result = " ";
    }
    document.querySelector('.enter_text').innerHTML = result;
}

// function ClearInput() {
//     number.value === " ";
// }