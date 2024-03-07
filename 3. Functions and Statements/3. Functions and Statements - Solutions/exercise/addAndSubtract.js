function addAndSubtract(firstNum, secondNum, thirdNum) {
  let sum = (first, second) => {
    return first + second;
  };

  let subtract = (sum, third) => {
    return sum - third;
  };

  console.log(subtract(sum(firstNum, secondNum), thirdNum));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
