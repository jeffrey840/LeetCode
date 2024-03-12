/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countSubarrays(nums,k) {

	let count = 0;
	let sum = 0;
	let start = 0;

	for (let end = 0; end < nums.length; end++) {
		sum += nums[end];
		// As long as the current subarray's score is >= k, move the start pointer forward
		while (sum * (end - start + 1) >= k && start <= end) {
			sum -= nums[start++];
		}
		// All subarrays ending at 'end' with start index from 'start' to 'end' have scores < k
		count += end - start + 1;
	}

	return count;

}