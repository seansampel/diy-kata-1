const humanCatDogYears = (number) => {
  function age() {
    if (number > 1) {
      let catYears = number - 2;
      catYears *= 4;
      catYears += 15;
      catYears += 9;

      let dogYears = number - 2;
      dogYears *= 5;
      dogYears += 15;
      dogYears += 9;

      return [number, catYears, dogYears];
    }
    if (number === 1) {
      const catYears = number + 15;
      const dogYears = number + 15;

      return [number, catYears, dogYears];
    }

    return [number, 0, 0];
  }
  return age();
};
module.exports = humanCatDogYears;
