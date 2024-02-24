function calculator(firstNum, operator, secondNum) {

    let result = 0;

    switch(operator) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '*': result = firstNum * secondNum; break;
    }

    console.group(result.toFixed(2))
}

calculator(25.5,
    '-',
    3
    )
