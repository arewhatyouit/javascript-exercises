const removeFromArray = function(array, ...arg) {
        const result = array.filter(v => arg.indexOf(v) === -1);

    return result

};

console.log(removeFromArray([1, 2, 3, 4], 3))
console.log(removeFromArray([1, 2, 3, 4], 3, 2, 4))
console.log(removeFromArray([1, 2, 2, 3], 2))
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"))
// Do not edit below this line
module.exports = removeFromArray;
