const repeatString = function (string, times) {
    let repeatedStr = "";
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        repeatedStr += string;
    }
};

// Do not edit below this line
module.exports = repeatString;
