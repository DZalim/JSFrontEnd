function printEveryNthElementFromAnArray(array, step) {

    let filteredArray = [];

    for (let i = 0; i < array.length; i+=step) {
        filteredArray.push(array[i])
    }

    return filteredArray

}

printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
