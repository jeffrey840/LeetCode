/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums,val) {


	let k = 0; // Initialize a counter for elements not equal to val

	for (let i = 0; i < nums.length; i++) {
		// If the current element is not equal to val,
		// move it to the 'k' position and increment 'k'
		if (nums[i] !== val) {
			nums[k] = nums[i];
			k++;
		}
	}

	// After the loop, 'k' is the length of the array without elements equal to 'val'
	return k;



}