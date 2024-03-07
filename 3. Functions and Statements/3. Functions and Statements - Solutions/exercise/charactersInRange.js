function charactersInRange(firstSymbol, secondSymbol) {
  let result = "";
  let start = Math.min(firstSymbol.charCodeAt(), secondSymbol.charCodeAt()); //ord in python
  let end = Math.max(firstSymbol.charCodeAt(), secondSymbol.charCodeAt());

  for (let currentCode = start + 1; currentCode < end; currentCode++) {
    let currentChar = String.fromCharCode(currentCode); //chr in python
    result += `${currentChar} `;
  }

  console.log(result.trimEnd());
}

charactersInRange("a", "d");
charactersInRange("#", ":");
charactersInRange("C", "#");
