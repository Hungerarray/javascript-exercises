const fibonacci = function(val) {
  if (val < 0)
    return "OOPS";
  const cache = Math.sqrt(5);
  const comp1 = ((1 + cache) / 2) ** val;
  const comp2 = ((1 - cache) / 2) ** val;
  return Math.round((comp1 - comp2) / cache);
};

// Do not edit below this line
module.exports = fibonacci;
