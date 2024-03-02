function pascalCaseSplitter(string) {

    let wordsRegex = /[A-Z][a-z]*/g;
    let wordsArray = string.match(wordsRegex);

    console.log(wordsArray.join(', '))
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo')
