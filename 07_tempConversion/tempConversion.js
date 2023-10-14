const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * 5/9;
  return rounded(tempC, 1);
};

const convertToFahrenheit = function(tempC) {
  let tempF = tempC * 9/5 + 32;
  return rounded(tempF, 1);
};

function rounded(num, precision) {
  return Math.round(num * (10**precision)) / (10 ** precision);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
