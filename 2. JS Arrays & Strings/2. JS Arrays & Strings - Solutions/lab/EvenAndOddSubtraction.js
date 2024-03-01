function EvenAndOddSubtraction(array) {

    let oddSum = 0;
    let evenSum = 0;

    for (const element of array) {
        if (element % 2 === 0) {
            evenSum += element
        } else {
            oddSum += element
        }     
    }

    console.log(evenSum - oddSum)

}

EvenAndOddSubtraction([1,2,3,4,5,6])
EvenAndOddSubtraction([3,5,7,9])
EvenAndOddSubtraction([2,4,6,8,10])
