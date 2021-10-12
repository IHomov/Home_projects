// variables
let operationRow = document.querySelectorAll('button');
// event handler
operationRow.forEach( (item) => item.addEventListener("click", function(e) { 
	Calculation(item);
}));

// Describe  function calculation
let firstNum, secondNum, op;
function Calculation(item) {
    let result;
    let mathOp = item.innerHTML;
    let num = Number(document.getElementsByClassName('enter_text')[0].value);
    if (num !== "" && mathOp!== "=" && mathOp !== undefined) {
        firstNum = +num;
        op = mathOp;
        document.getElementsByClassName('enter_text')[0].value = "";
    }

    if (num !== "" && op === "=" && mathOp !== undefined) {
        secondNum = +num;
    
        switch (op) {
            case '+':
                result = firstNum + secondNum;
                break;
            case '-':
                result = firstNum - secondNum;
                break;
            case '*':
                result = firstNum * secondNum;
                break;
            case '/':
                result = firstNum / secondNum;
                break;
        
        }
        document.getElementsByName('resultField').innerText = result;
    }
    if (op === "C") {
        document.querySelector('.enter_text').innerText = "";
        num = "";
        mathOp = undefined;
    }
}