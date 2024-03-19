/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

	if(nums[0].length === 1) {
		return nums[0]
	}

	let odd = []
	let even = []

	for(let i in nums) {

		if(nums[i] %2===0) {

			odd.push(nums[i])

		} else if(nums[i] %2===1) {
			even.push(nums[i])
		}

	}
	return odd.concat(even)

};

