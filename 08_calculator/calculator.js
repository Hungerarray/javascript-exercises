const add = function (val1, val2) {
  return val1 + val2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let ret = 0;
  arr.forEach((val) => (ret += val));
  return ret;
};

const multiply = function (arr) {
  let prd = 1;
  arr.forEach((val) => prd *= val);
  return prd;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num1) {
  let prd = 1;
  for (let i = 2; i <= num1; ++i) prd *= i;
  return prd;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
