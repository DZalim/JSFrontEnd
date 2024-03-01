function reverseAnArrayOfNumbers(countOfElements, array) {

    let elements = array.slice(0, countOfElements);
    let reversedArray = elements.reverse();

    console.log(reversedArray.join(' '));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])