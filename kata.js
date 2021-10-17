function digPow(n, p) {
  resultNumber = 0;
  multiplicator = 0;
  for (let i = 0; i < n.toString().length; i++) {
    resultNumber += Math.pow(parseInt(n.toString()[i]), p + i);
  }
  for (let i = 0; i < resultNumber; i++) {
    if (resultNumber === n * (i + 1)) {
      return (multiplicator = i + 1);
    } else if (resultNumber < n * i) {
      return (multiplicator = -1);
    }
  }
  return multiplicator;
}

console.log(digPow(46288, 3));
