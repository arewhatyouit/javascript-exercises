const convertToCelsius = function(F) {
  output = ((F - 32) * 5/9);
  if (!Number.isInteger(output)) {
  output = output.toFixed(1);
  output = Number(output)
  return output;
} else {
  return output;
}
};

const convertToFahrenheit = function(C) {
  output = (C * 9/5 + 32);
  if (!Number.isInteger(output)) {
  output = output.toFixed(1);
  output = Number(output)
  return output;
  } else {
  return output;
  }
};


console.log(convertToCelsius(32))
console.log(convertToCelsius(100))
console.log(convertToCelsius(-100))

console.log(convertToFahrenheit(0))
console.log(convertToFahrenheit(73.2))
console.log(convertToFahrenheit(-10))


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


// 	x °F ≘ (x − 32) × ⁠5/9 C
// x °C ≘ (x × ⁠9/5) + 32 F