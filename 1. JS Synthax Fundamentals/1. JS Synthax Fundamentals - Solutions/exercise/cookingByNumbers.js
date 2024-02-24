function cookingByNumbers(numAsString, op1, op2, op3, op4, op5) {

    let num = Number(numAsString)
    let operations = op1[0] + op2[0] + op3[0] + op4[0] + op5[0]

    for (let i = 0; i < operations.length; i++) {
        switch(operations[i]) {
            case 'c': num /= 2; break;
            case 'd': num = Math.sqrt(num); break;
            case 's': num += 1; break;
            case 'b': num *= 3; break;
            case 'f': num *= 0.80; break;
        }

        console.log(num)
    }

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
