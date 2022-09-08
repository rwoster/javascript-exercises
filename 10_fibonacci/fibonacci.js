const fibonacci = function (num) {
    if (num < 0) {
        return "OOPS";
    } else {
        if (num === 0) return 0;
        let a = 0;
        let b = 1;
        while (num > 0) {
            const temp = b;
            b = a + b;
            a = temp;
            num--;
        }
        return a;
    }
};

// fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
