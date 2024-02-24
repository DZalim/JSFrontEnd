function sameNumbers(number) {

    let result = true;
    let sumOfNumbers = 0;
    let numberAsString = String(number);
    let firstChar = numberAsString[0];

    for (let i = 1; i < numberAsString.length; i++) {
        if (numberAsString[i] !== firstChar) {
            result = false
            break
        }
    }

    console.log(result)

    for (let i = 0; i < numberAsString.length; i++) {
        sumOfNumbers += Number(numberAsString[i])
    }

    console.log(sumOfNumbers)

}

sameNumbers(1234)
