const leapYears = function(year) {
    let output = "";

    if (year % 100 === 0 && year % 400 !==0) {
        output = false;
    }else if (year % 4 === 0) {
        output = true;
    } else {
        output = false;
    }

    return output
};

console.log(leapYears(1996))
console.log(leapYears(1997))
console.log(leapYears(34992))
console.log(leapYears(1900))
console.log(leapYears(1600))
console.log(leapYears(700))

// Do not edit below this line
module.exports = leapYears;

// if years are divisable by 4 true
// if years are divisable by 100 false
// if years are divisable by 400 true