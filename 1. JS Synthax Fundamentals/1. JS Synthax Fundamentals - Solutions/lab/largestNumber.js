function largestNumber(firstNum, secondNum, thirdNum) {

    let largest = 0;

    if (firstNum > secondNum && firstNum > thirdNum) {
        largest = firstNum
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        largest = secondNum
    } else {
        largest = thirdNum
    }

    console.log(`The largest number is ${largest}.`)

}

largestNumber(-3, -5, -22.5)
