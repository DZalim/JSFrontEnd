function printAndSum(startNum, endNum) {

    let numbers = '';
    let sumNumbers = 0;

    for (let i = startNum; i <= endNum; i++) {
        numbers += i + ' ';
        sumNumbers += i;
    }

    console.log(numbers);
    console.log(`Sum: ${sumNumbers}`)

}

printAndSum(5, 10)
