const findTheOldest = function (people) {
    const sorted = people.sort((a, b) => {
        const notDead = new Date().getFullYear();

        const aAge = (a.yearOfDeath ? a.yearOfDeath : notDead) - a.yearOfBirth;
        const bAge = (b.yearOfDeath ? b.yearOfDeath : notDead) - b.yearOfBirth;

        return aAge > bAge ? -1 : 1;
    });
    return sorted[0];
};

// const notDead = new Date().getFullYear();
// console.log(notDead);

// Do not edit below this line
module.exports = findTheOldest;
