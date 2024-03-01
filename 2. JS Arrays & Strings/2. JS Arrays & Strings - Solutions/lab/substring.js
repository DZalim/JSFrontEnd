function substring(text, startIndex, countOfElements) {

    let endIndex = startIndex + countOfElements
    
    console.log(text.slice(startIndex, endIndex))

}

substring('SkipWord', 4, 7)
