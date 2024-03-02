function listOfNames(arrayOfNames) {

    arrayOfNames.sort((a, b) => {
        return a.localeCompare(b);
    })

    for (let i=1; i <= arrayOfNames.length; i++) {
        console.log(`${i}.${arrayOfNames[i-1]}`)
    }
    
}

listOfNames(["John", "Bob", "Christina", "Ema"])
