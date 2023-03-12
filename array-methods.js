/*The tests have already been written for you. Look at the inputs in each test to get an idea of what the array looks like for each function

use .filter on these tasks

Use .filter when you want to remove things from an array - it will return a new array with elements that match your condition.

*/

function belowTen(numbers) {
    const newArr = numbers.filter((num) => num < 10);
    return newArr;
};

function isAttending(replies) {
    const newArr = replies.filter((reply) => reply.confirmed);
    return newArr;
};

function hasMultipleCats(people) {
    // filter can only be applied to an array data type
    // filter always returns a new array
    const newArr = people.filter((person) => {
        // first argument is the singular item in the array that filter gets from looping
        // my conditional must be in the return of filter
        return person.catCount >= 2
    });
    // function must return something too!
    return newArr;
};

/**********************************************************************************************/

// use .map on these tasks

// .map will return an array the same length as the input. It will perform a function/operation on each element in the array

function multiplyByTwo(numbers) {}

function makeGuestList(attendees) {}

function cancelMemberships(members) {
    // think about what you want in the array at the end
}

module.exports = {
    isAttending,
    belowTen,
    hasMultipleCats,
    multiplyByTwo,
    makeGuestList,
    cancelMemberships,
};
