const removeFromArray = function(array, num) {
const result = array.filter(v => v != num);
return result
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
