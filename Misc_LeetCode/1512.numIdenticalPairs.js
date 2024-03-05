


function numIdenticalPairs(nums) {

	let count = ""

	for(let i = 0;i <= nums.length;i++) {

		for(let j = i;j <= nums.length;j++) {

			if(nums[i] === nums[j] && i < j) {
				count++
			}


		}

	}
	return count


}