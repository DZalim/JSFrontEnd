function passwordValidator(password) {
  function isValidLength(string) {
    return string.length >= 6 && string.length <= 10;
  }

  function isAlphanumeric(string) {
    let regex = /^[A-Za-z0-9]+$/gm;
    let isCorrect = regex.test(string);
    return isCorrect;
  }

  function checkDigits(string) {
    let digitsCounter = 0;
    for (const digit of string) {
      if (!isNaN(digit)) {
        digitsCounter++;
      }
    }
    return digitsCounter >= 2;
  }

  const validLength = isValidLength(password);
  const Alphanumeric = isAlphanumeric(password);
  const containDigits = checkDigits(password);
  const validPassword = validLength && Alphanumeric && containDigits;

  if (validPassword) {
    console.log("Password is valid");
  }

  if (!validLength) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!Alphanumeric) {
    console.log("Password must consist only of letters and digits");
  }

  if (!containDigits) {
    console.log("Password must have at least 2 digits");
  }
}

passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
