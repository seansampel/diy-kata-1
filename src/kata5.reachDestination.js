const reachDestination = (distance, speed) => {
  const time = Math.ceil((distance / speed) * 2) / 2;
  return "I should be there in about ${time} hour.";
};

module.exports = reachDestination;
