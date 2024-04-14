
function isMajorityElement(nums, target) {

// find out how many times teh target elemnt appears in nums array

// keep track of the count

// if count is more than nums.length return true

	let count = nums.reduce((count, current) => count + (current === target ? 1 : 0), 0);

	if(count > nums.length / 2) {
		return true
	} else return false

}

console.log(isMajorityElement([2,4,5,5,5,5,5,6,6],5))