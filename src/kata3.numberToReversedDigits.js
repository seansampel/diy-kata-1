const numberToReversedDigits = (number) => {
  return number
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reverse();
};

module.exports = numberToReversedDigits;
