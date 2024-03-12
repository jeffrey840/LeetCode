/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums,k) {

// Initialize an empty object to track the last index of each number
	const lastIndex = {};

	// Iterate through the array
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		// Check if the current number exists in lastIndex
		// and if the difference between indices is <= k
		if (lastIndex.hasOwnProperty(num) && i - lastIndex[num] <= k) {
			return true; // Found a nearby duplicate
		}

		// Update the last index of the current number
		lastIndex[num] = i;
	}

	// If no nearby duplicates found
	return false;
}

console.log(containsNearbyDuplicate([1,0,1,1],1))
console.log(containsNearbyDuplicate([1,2,3,1],3))
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))

