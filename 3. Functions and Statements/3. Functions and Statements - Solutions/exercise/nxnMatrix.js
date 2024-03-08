function nxnMatrix(size) {
    
  function printRow(number) {
    let singleRow = (number.toString() + " ").repeat(number);
    return singleRow;
  }

  for (let i = 1; i <= size; i++) {
    console.log(printRow(size));
  }
}

nxnMatrix(7);
