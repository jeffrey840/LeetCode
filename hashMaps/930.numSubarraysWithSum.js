/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {

	const frequencyMap = new Map();
	let prefixSum = 0;
	let count = 0;

	// Initialize the map with the prefix sum of 0 seen once (important for cases where the subarray starts from index 0)
	frequencyMap.set(0, 1);

	for (const num of nums) {
		// Update the current prefix sum
		prefixSum += num;

		// Check if there is a prefix sum such that prefixSum - goal exists in the map
		if (frequencyMap.has(prefixSum - goal)) {
			count += frequencyMap.get(prefixSum - goal);
		}

		// Update the map with the current prefix sum
		if (frequencyMap.has(prefixSum)) {
			frequencyMap.set(prefixSum, frequencyMap.get(prefixSum) + 1);
		} else {
			frequencyMap.set(prefixSum, 1);
		}
	}

	return count;

};