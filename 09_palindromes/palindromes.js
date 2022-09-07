const palindromes = function (w) {
    //convert to lowercase
    const word = w.toLowerCase();
    //regex replacement
    const punctuationless = word
        //strip all symbols
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        //strip all spaces
        .replace(/\s/g, "");

    //split the string on each char --> reverse the char array --> join the char
    const reverse = punctuationless.toLowerCase().split("").reverse().join("");

    //compare the forward with the reverse
    if (punctuationless === reverse) {
        // console.log(
        //     `punctuationless: ${punctuationless} === reverse: ${reverse} --- w: ${w}`
        // );
        return true;
    } else {
        // console.log(
        //     `punctuationless: ${punctuationless} != reverse: ${reverse} --- w: ${w}`
        // );
        return false;
    }
};

// console.log(palindromes("rAcecar!!!!!!!"));
// console.log(palindromes("A car, a man, a maraca."));
// console.log(palindromes("RAndY"));

// Do not edit below this line
module.exports = palindromes;
