const convertToCelsius = function() {
  let temp = arguments[0];
  let convertedTemp = temp;
  convertedTemp -= 32;
  convertedTemp *= 5;
  convertedTemp /=9;
  let finalString = convertedTemp.toFixed(1);
  let finalAnswer = parseFloat(finalString);
  return finalAnswer;
};

const convertToFahrenheit = function() {
  let temp = arguments[0];
  let convertedTemp = temp;
  convertedTemp *= 9;
  convertedTemp /=5;
  convertedTemp += 32;
  let finalString = convertedTemp.toFixed(1);
  let finalAnswer = parseFloat(finalString);
  return finalAnswer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
