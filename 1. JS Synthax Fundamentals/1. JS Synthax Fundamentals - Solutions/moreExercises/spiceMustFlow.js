function spiceMustFlow(startingYield) {

    let currentYield = startingYield;
    let amount = 0;
    let days = 0;

    while (currentYield >= 100) {

        amount += currentYield - 26;
        days += 1;
        currentYield -= 10
    }

    amount -= 26

    console.log(days)
    console.log(amount)

}

spiceMustFlow(450)
