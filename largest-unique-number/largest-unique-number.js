/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const countMap = new Map();

    // Populate the map with frequency counts of each number
    for (const num of nums) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }

    let largestUnique = -1;

    // Iterate over the map to find the highest number that occurs exactly once
    for (const [num, count] of countMap) {
        if (count === 1 && num > largestUnique) {
            largestUnique = num;
        }
    }

    return largestUnique;
};