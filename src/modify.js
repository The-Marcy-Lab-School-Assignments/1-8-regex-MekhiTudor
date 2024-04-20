const swapAllCases = (str) => {
  return str.replace(/\w/gi, match => {
    const matchLower = match.toLowerCase()
    return match === matchLower ? match.toUpperCase() : matchLower;
  })
};

module.exports = {
  swapAllCases,
};
