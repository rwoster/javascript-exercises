const findTheOldest = function (array) {
    // ! MY SOLUTION
    // const sorted = array.sort((a, b) => {
    //     const notDead = new Date().getFullYear();
    //     const aAge = (a.yearOfDeath ? a.yearOfDeath : notDead) - a.yearOfBirth;
    //     const bAge = (b.yearOfDeath ? b.yearOfDeath : notDead) - b.yearOfBirth;
    //     return aAge > bAge ? -1 : 1;
    // });
    // return sorted[0];

    // ! ODIN SOLUTION
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
