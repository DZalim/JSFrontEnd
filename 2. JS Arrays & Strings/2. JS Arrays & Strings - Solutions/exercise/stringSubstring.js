function stringSubstring(word, text) {

    let wordsArray = text.toLowerCase().split(' ');
    let result = `${word} not found!`;

    for (let i = 0; i < wordsArray.length; i++) {
        let currentWord = wordsArray[i]
        if ( currentWord === word) {
            result = currentWord
        }
    }

    console.log(result)
}

stringSubstring('python',
'JavaScript is the best programming language'
)
