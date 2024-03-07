function charactersInRange(startSymbol, lastSymbol) {
  let result = "";
  let start = startSymbol.charCodeAt(); //ord in python
  let end = lastSymbol.charCodeAt();

  for (
    let currentCode = Math.min(start, end) + 1;
    currentCode < Math.max(start, end);
    currentCode++
  ) {
    let currentChar = String.fromCharCode(currentCode); //chr in python
    result += `${currentChar} `;
  }

  console.log(result.trimEnd());
}

charactersInRange("a", "d");
charactersInRange("#", ":");
charactersInRange("C", "#");
