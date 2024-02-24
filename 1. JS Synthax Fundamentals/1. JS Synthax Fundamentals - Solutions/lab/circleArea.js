function circleArea(argument) {
    let argumentType = typeof argument

    if (argumentType === 'number') {
        area = Math.PI * argument * argument
        console.log(`${area.toFixed(2)}`)
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argumentType}.`)
    }
}

circleArea(5)
