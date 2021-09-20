let userOperation = prompt("Choose math operation: add, sub, mul, div");
let userFirstOperand = +prompt("Enter first number:");
let userSecondOperand = +prompt("Enter second number:");

let answer = 0;
let sign = "";

alert(mathCalculation(userOperation, userFirstOperand, userSecondOperand));
function mathCalculation(operation, firstOperand, secondOperand) {
    operation = operation.toLowerCase();
    switch (operation) {
        case "add":
            answer = firstOperand + secondOperand;
            sign = "+";
            break;
        case "sub":
            answer = firstOperand - secondOperand;
            sign = "-";
            break;
        case "mul":
            answer = firstOperand * secondOperand;
            sign = "";
            break;
        case "div":
            answer = firstOperand / secondOperand;
            sign = "/";
            break;
    }
    return (`${firstOperand} ${sign} ${secondOperand} = ${answer}`);
}
