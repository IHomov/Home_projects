// variables
let operationRow = document.querySelectorAll('button');
// event handler
operationRow.forEach( (item) => item.addEventListener("click", function(e) { 
	Calculation(item);
}));

// Describe  function calculation
let firstNum, secondNum, op;
function Calculation(item) {
    
    let mathOp = item.innerHTML;
    let num = document.getElementsByClassName('text')[0].value;
    let result;
    if (num !== "" && mathOp !== undefined && mathOp !== "="  ) {
        firstNum = +num;
        op = mathOp;
        document.getElementsByClassName('text')[0].value = "";
    }

    if (num !== "" && mathOp === "=" && op !== undefined) {
        
        secondNum = +num;
        switch (op){
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

        document.querySelector('.resultField').innerText = result;
    }

    if (op === "C") {
        document.querySelector('.resultField').innerText = "";
        num = "";
        mathOp = undefined;
    }
}