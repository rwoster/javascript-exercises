const palindromes = function (word) {
    const rev = word.split("").reverse().join("");

    if (word === rev) {
        console.log(`word: ${word} === rev: ${rev}`);
        return true;
    } else {
        console.log(`str: ${word} != rev: ${rev}`);
        return false;
    }
};

console.log(palindromes("racecar"));
console.log(palindromes("randy"));

// Do not edit below this line
module.exports = palindromes;
