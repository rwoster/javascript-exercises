// const removeFromArray = (arr, num, num2, num3, num4) => {
//     num2 = num2 || null;
//     num3 = num3 || null;
//     num4 = num4 || null;

//     const filter = (arr, n) => arr.filter((i) => i !== n);

//     let answer = filter(arr, num);

//     if (num2 != null) {
//         answer = filter(answer, num2);
//     }
//     if (num3 != null) {
//         answer = filter(answer, num3);
//     }
//     if (num4 != null) {
//         answer = filter(answer, num4);
//     }

//     return answer;
// };

const removeFromArray = (...args) => {
    const array = args[0];
    return array.filter((val) => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
