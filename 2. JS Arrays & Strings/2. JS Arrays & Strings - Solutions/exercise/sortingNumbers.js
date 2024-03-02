function sortingNumbers(array) {

    let resultArray = []
    let sortedArray = array.sort((a, b) => a - b)
    let arrayLength =  array.length

    for (let i = 0; i < arrayLength; i++) {

        if (i % 2 === 0) {
            resultArray.push(sortedArray.shift());
        } else {
            resultArray.push(sortedArray.pop());
        }
    }

    return resultArray

}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
