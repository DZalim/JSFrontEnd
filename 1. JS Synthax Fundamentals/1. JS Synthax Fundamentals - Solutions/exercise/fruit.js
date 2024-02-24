function fruit(typeOfFruit, weightInGr, pricePerKg) {

    let weightInKg = weightInGr / 1000;
    let price = weightInKg * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`)

}

fruit('orange', 2500, 1.80)
