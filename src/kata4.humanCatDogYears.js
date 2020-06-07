const humanCatDogYears = (number) => {
  const humanYears = 0;
  const catYears = 0;
  const dogYears = 0;
  if (number + humanYears) {
    return 1;
  }
  if (humanYears === 1) {
    return catYears && dogYears + [15];
  }
  // if (humanYears === 2) {
  //   return catYears && dogYears + [9];
  // }
  // if (humanYears > 2) {
  //   return catYears * [4];
  // }
  // if (humanYears > 2) {
  //   return dogYears * [5];
  // }
  return [humanYears, catYears, dogYears];
};

module.exports = humanCatDogYears;
