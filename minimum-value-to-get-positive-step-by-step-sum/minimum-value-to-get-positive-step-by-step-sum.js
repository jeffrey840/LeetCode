/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let output = 0;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (currentSum + nums[i] < 1) {
            output += -(currentSum + nums[i]) + 1;
            currentSum = 1;
        } else {
            currentSum += nums[i];
        }
    }
    
    return output || 1;

};