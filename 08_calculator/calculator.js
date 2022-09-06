const add = function (a, b) {
    return a + b;
};

const subtract = (a, b) => a - b;

const sum = function (arr) {
    return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = (arr) =>
    arr.length ? arr.reduce((acc, num) => acc * num) : 0;

const power = (a, b) => a ** b;

const factorial = function (a) {
    if (a === 0) return 1;
    let sum = 1;
    for (let i = a; i > 0; i--) {
        sum *= i;
    }
    return sum;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
