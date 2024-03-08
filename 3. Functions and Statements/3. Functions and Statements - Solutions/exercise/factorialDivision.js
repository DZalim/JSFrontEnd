function factorialDivision(firstNum, secondNum) {
    
  function calculateFactorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
      result *= i;
    }

    return result;
  }

  let firstResult = calculateFactorial(firstNum);
  let secondResult = calculateFactorial(secondNum);
  let division = firstResult / secondResult;

  console.log(`${division.toFixed(2)}`);
}

factorialDivision(5, 2);
factorialDivision(6, 2);
