const repeatString = function(string, num) {
    let result = ''
    
    for (i = 0; i < num; i++) {
            result = result + string
        }
        return result;
        }
    
    repeatString('hey', 3)
    // repeatString('hello', 10)
    
    // Do not edit below this line
    module.exports = repeatString;
    