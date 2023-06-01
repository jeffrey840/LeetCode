

function topKFrequent(nums, k) {
	const frequencyMap = new Map();
	for (const num of nums) {
		frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
	}

	return Array.from(frequencyMap.keys())
		.sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a))
		.slice(0, k);
}

// In this simplified version, we use a hash map (frequencyMap) to count the frequency
// of each element in the nums array. We then convert the keys of the map to an array using Array.from(frequencyMap.keys()).
//
// 	Next, we sort the array of keys based on their frequencies in descending order
// 	using the sort method and the custom comparator function
// 	(a, b) => frequencyMap.get(b) - frequencyMap.get(a).
// 	This ensures that elements with higher frequencies appear first in the array.
//
// 	Finally, we use the slice method to extract the first k elements from the sorted array,
// 	which represents the k most frequent elements in nums.
//
// 	The time complexity of this simplified approach is O(n log n), where n is the length of the nums array,
// 	due to the sorting operation. However, since the problem constraints require a solution with better time complexity,
// 	this simplified approach may not meet the follow-up requirement.