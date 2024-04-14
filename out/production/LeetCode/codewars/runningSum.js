



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
	let runningTotal = 0;
	let runningSums = nums.map((num, index) => {
		runningTotal += num;
		console.log(`After adding element at index ${index} (${num}), running total is: ${runningTotal}`);
		return runningTotal;
	});
	console.log(`Final running sums array: ${runningSums}`);
	return runningSums;
};




// Test cases with logs
console.log(runningSum([1, 2, 3, 4])); // Expected output: [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // Expected output: [1, 2, 3, 4, 5]



