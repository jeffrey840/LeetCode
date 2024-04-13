function removeDuplicates(nums) {
	if (nums.length === 0) return 0;

	let i = 0;
	for (let j = 1; j < nums.length; j++) {
		if (nums[j] !== nums[i]) {
			i++;
			nums[i] = nums[j];
		}
	}
	return i + 1;
}

// Example usage
let nums = [1, 1, 2, 2, 3, 4, 4, 5];
let k = removeDuplicates(nums);
console.log("Number of unique elements:", k);