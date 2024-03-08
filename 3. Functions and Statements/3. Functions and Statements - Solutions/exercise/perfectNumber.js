function perfectNumber(number) {
  let sumOfNumbers = 0;

  for (let currentNum = 1; currentNum < number; currentNum++) {
    if (number % currentNum === 0) {
      sumOfNumbers += currentNum;
    }
  }

  if (sumOfNumbers === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
