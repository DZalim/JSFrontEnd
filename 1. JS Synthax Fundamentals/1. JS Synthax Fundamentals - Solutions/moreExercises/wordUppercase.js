function wordUppercase(text) {

    let words = text.split(' ')
    let allWords = [];
    

    for (let word of words ) {
        let currentWord = '';
        for (letter of word) {
            if (letter.match(/[A-Za-z1-9]/)) {
                currentWord += letter
            } else {
                if (currentWord) {
                    allWords.push(currentWord.toUpperCase());
                    currentWord = '';
                }
            }
        }
        if (currentWord) {
            allWords.push(currentWord.toUpperCase());
        }    
    }

    console.log(allWords.join(', '))
}

wordUppercase('Functions in JS can be nested, i.e. hold other functions')
