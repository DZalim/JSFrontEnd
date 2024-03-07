function simpleCalculator(a, b, operator) {
  const operations = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };

  let result = operations[operator](a, b);
  console.log(result);
}

simpleCalculator(5, 5, "multiply");

simpleCalculator(40, 8, "divide");

simpleCalculator(12, 19, "add");

simpleCalculator(50, 13, "subtract");
