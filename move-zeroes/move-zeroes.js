/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePointer = 0; // Points to the next position for a non-zero element
    
    // First pass: move all non-zero elements to the beginning of the array
    for(let readPointer = 0; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== 0) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }
    
    // Second pass: fill the rest of the array with zeros
    for(let i = writePointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};
