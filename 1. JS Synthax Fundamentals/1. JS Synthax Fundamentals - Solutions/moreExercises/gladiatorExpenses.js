function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let trashedHelmet = 0
    let trashedSword = 0
    let trashedShield = 0
    let trashedArmor = 0

    for (let i = 1; i <= lostFightsCount; i++) {

        if (i % 2 === 0) {
            trashedHelmet += 1;
        }

        if (i % 3 === 0) {
            trashedSword += 1;
        }

        if (i % 2 == 0 && i % 3 === 0) {
            trashedShield += 1;

            if (trashedShield % 2 === 0) {
                trashedArmor += 1;
            }
        }
    }

    let totalExpenses = helmetPrice * trashedHelmet + swordPrice * trashedSword + shieldPrice * trashedShield + armorPrice * trashedArmor

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )
