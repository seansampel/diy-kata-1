const joinNames = (namesObj) => {
  const array1 = namesObj.map((a) => a.name);
  const array2 = array1.pop();
  return array1.length < 1 ? `${array2}` : `${array1.join(", ")} & ${array2}`;
};

module.exports = joinNames;
