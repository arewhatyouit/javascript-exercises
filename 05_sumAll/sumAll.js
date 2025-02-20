const sumAll = function(num1, num2) {
    let array = [];

    if (num1 < 0 | num2 < 0) {
        error = 'ERROR';
        return error;
    }

    else if (!Number.isInteger(num1) | !Number.isInteger(num2)) {
        error = 'ERROR';
        return error;
    }

    else if (num1 < num2) {
        for (let i = num1; i <= num2; i++)
        array.push(i);
        let sum = array.reduce((total, current) => total + current, 0);
        return sum;
    }

    else if (num1 > num2) {
        array = array.reverse()
        for (let i = num2; i <= num1; i++)
        array.push(i);
        let sum = array.reduce((total, current) => total + current, 0);
        return sum;
    }


};

console.log(sumAll(2, 4))
console.log(sumAll(1, 4000))
console.log(sumAll(123, 1))
console.log(sumAll(-10, 4))
console.log(sumAll(2.5, 4))
console.log(sumAll(10, "90"))
console.log(sumAll(10, [90, 1]))
// Do not edit below this line
module.exports = sumAll;

// create an empty array
// if statement checking if num1 is smaller than num2
// if true add num1 + 1 to array
// if false use indexOf to add together each number
// return variable containing sum of numbers