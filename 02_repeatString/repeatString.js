const repeatString = function(string, num) {
    let result = '';
    
    if (num < 0) {
        return 'ERROR';
    }
    
    for (let i = 0; i < num; i++) {
        result += string;
    }
    
    return result;
}

function randomNum() {
    
}

console.log(repeatString('hey', 3));
console.log(repeatString('hello', 10));
console.log(repeatString('hi', 1));
console.log(repeatString('bye', 0));
console.log(repeatString("don't use the built-in repeat method!", 1));
console.log(repeatString('goodbye', -1));

module.exports = repeatString;
