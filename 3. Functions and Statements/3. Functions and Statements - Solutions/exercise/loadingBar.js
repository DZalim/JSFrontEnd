function loadingBar(percent) {
    
  function isLoading(number) {
    let percentChar = number / 10;
    let repeatPercent = "%".repeat(percentChar);
    let repeatPoint = ".".repeat(10 - percentChar);
    return `${number}% [${repeatPercent}${repeatPoint}]`;
  }

  function isCompleted(number) {
    return `${number}% [${"%".repeat(number / 10)}]`;
  }

  if (percent === 100) {
    console.log(`${isCompleted(percent)}\n100% Complete!`);
  } else {
    console.log(`${isLoading(percent)}\nStill loading...`);
  }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
