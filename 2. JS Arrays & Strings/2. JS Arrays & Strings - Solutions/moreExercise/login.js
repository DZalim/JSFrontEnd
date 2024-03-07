function login(arrayOfWords) {
  let username = arrayOfWords[0];
  let passwords = arrayOfWords.slice(1, arrayOfWords.length);

  let tryCount = 1;

  for (let password of passwords) {
    let passwordAsArray = password.split("");
    let reversedPassword = passwordAsArray.reverse().join("");

    if (username === reversedPassword) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      if (tryCount < 4) {
        console.log("Incorrect password. Try again.");
        tryCount = tryCount + 1;
      } else {
        console.log(`User ${username} blocked!`);
        break;
      }
    }
  }
}

login(['Acer','login','go','let me in','recA'])
login(['momo','omom'])
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
