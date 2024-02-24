function validityChecker(x1, y1, x2, y2) {

    let firstValidation = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) **2));

    if (Number.isInteger(firstValidation)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let secondValidation = Math.sqrt(((0 - x2) ** 2) + ((0 - y2) **2));

    if (Number.isInteger(secondValidation)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let thirdValidation = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) **2));

    if (Number.isInteger(thirdValidation)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validityChecker(2, 1, 1, 1)
