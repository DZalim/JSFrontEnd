function signCheck(firstNum, secondNum, thirdNum) {
  let ispositive = false;

  if (firstNum > 0 && secondNum < 0 && thirdNum < 0) {
    ispositive = true;
  } else if (firstNum < 0 && secondNum < 0 && thirdNum > 0) {
    ispositive = true;
  } else if (firstNum < 0 && secondNum > 0 && thirdNum < 0) {
    ispositive = true;
  } else if (firstNum > 0 && secondNum > 0 && thirdNum > 0) {
    ispositive = true;
  }

  if (ispositive) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
signCheck(9, 4, 1);
