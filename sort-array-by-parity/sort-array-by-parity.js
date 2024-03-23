/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let leftPtr = 0;
    let rightPtr = nums.length - 1;
    
    while (leftPtr < rightPtr) {
        // If the left pointer is even, no need to swap, just move to next
        if (nums[leftPtr] % 2 === 0) {
            leftPtr++;
        } else if (nums[rightPtr] % 2 === 1) { // If the right pointer is odd, it's in the right place, move to previous
            rightPtr--;
        } else {
            // If leftPtr points to an odd and rightPtr to an even, swap them
            [nums[leftPtr], nums[rightPtr]] = [nums[rightPtr], nums[leftPtr]];
            leftPtr++;
            rightPtr--;
        }
    }
    
    return nums;
};
