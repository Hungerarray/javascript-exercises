const palindromes = function (str) {
  const stripped = str.replace(/[\W\s_]/g, "").trim().toLowerCase();
  const reversed = stripped.split('').reverse().join('');
  if (stripped === reversed)
    return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
