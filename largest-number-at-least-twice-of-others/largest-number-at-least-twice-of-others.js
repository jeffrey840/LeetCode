/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    if (nums.length === 1) return 0; // If there's only one element, it's trivially dominant.

    // Find the maximum value and its index
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }

    // Check if the maximum value is at least twice as large as all other numbers
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[maxIndex] < 2 * nums[i]) {
            return -1; // If we find an element for which the condition does not hold, return -1
        }
    }

    // If the loop completes without returning -1, the max element is dominant
    return maxIndex;
};