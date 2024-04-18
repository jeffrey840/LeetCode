/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashMap = new Map(); // to store the most recent index of each character
    let maxLength = 0;
    let left = 0; // left pointer for the sliding window
    
    for (let right = 0; right < s.length; right++) {
        if (hashMap.has(s[right]) && hashMap.get(s[right]) >= left) {
            // Move the left side of the window to the right of the last occurrence of s[right]
            left = hashMap.get(s[right]) + 1;
        }
        
        // Update the latest index of the character at the right pointer
        hashMap.set(s[right], right);
        
        // Calculate the current length of the substring by taking the difference of right and left indices + 1
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};