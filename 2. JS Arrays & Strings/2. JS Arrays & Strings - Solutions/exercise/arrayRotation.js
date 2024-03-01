function arrayRotation(array, countOfrotations) {

    for(let i = 0; i <countOfrotations; i++) {
        let element = array.shift()
        array.push(element)
    } 

    console.log(array.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2)
