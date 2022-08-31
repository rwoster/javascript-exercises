const ftoc = (temp) => {
    // [°C] = ([°F] - 32) * 5/9
    return Number((((temp - 32) * 5) / 9).toFixed(1));
};

const ctof = (temp) => {
    // [°F] = [°C] * 9/5 + 32
    return Number(((temp * 9) / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
