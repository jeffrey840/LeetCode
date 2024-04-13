





var removeDuplicates = function(nums) {

	let numCount = 1;
	const numsLen = nums.length;
	for (let i = 1; i < numsLen; i++) {
		if (nums[i] != nums[i - 1]) {
			nums[numCount] = nums[i];
			numCount++;
		}
	}
	nums = nums.slice(0, numCount)
	return numCount;


};


console.log(removeDuplicates([1,1,2]))


