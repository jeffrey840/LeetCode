/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
  let sum = 0;
    let maxSum = 0;
    
    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    // This is the max sum for the first window
    maxSum = sum;
    
    // Start from the kth element and slide the window to the right
    for (let i = k; i < nums.length; i++) {
        // Add the current element and remove the leftmost element from the sum
        sum = sum + nums[i] - nums[i - k];
        
        // Update maxSum if the current sum is greater
        maxSum = Math.max(maxSum, sum);
    }
    
    // Return the maximum average
    return maxSum / k;
    
};