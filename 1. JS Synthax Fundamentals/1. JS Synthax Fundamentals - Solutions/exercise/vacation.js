function vacation(numberOfPeople, typeOfGroup, dayOfWeek) {

    let totalPrice = 0;
    let pricePerOnePerson = 0;

    if (typeOfGroup === 'Students') {
        if (dayOfWeek === 'Friday') {
            pricePerOnePerson = 8.45;
        } else if (dayOfWeek === 'Saturday') {
            pricePerOnePerson = 9.80;
        } else if (dayOfWeek === 'Sunday') {
            pricePerOnePerson = 10.46;
        }

        totalPrice = numberOfPeople * pricePerOnePerson;

        if (numberOfPeople >= 30) {
            totalPrice *= 0.85;
        }

    } else if (typeOfGroup === 'Business') {
        if (dayOfWeek === 'Friday') {
            pricePerOnePerson = 10.90;
        } else if (dayOfWeek === 'Saturday') {
            pricePerOnePerson = 15.60;
        } else if (dayOfWeek === 'Sunday') {
            pricePerOnePerson = 16;
        }

        totalPrice = numberOfPeople * pricePerOnePerson
        
        if (numberOfPeople >= 100) {
            totalPrice = (numberOfPeople - 10) * pricePerOnePerson;
        }

    } else if (typeOfGroup === 'Regular') {
        if (dayOfWeek === 'Friday') {
            pricePerOnePerson = 15;
        } else if (dayOfWeek === 'Saturday') {
            pricePerOnePerson = 20;
        } else if (dayOfWeek === 'Sunday') {
            pricePerOnePerson = 22.50;
        }

        totalPrice = numberOfPeople * pricePerOnePerson

        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
            totalPrice *= 0.95;
        }
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30,
    "Students",
    "Sunday"    
    )
