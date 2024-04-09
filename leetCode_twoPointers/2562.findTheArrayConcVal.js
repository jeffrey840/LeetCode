var findTheArrayConcVal = function(nums) {

	let concatValues = 0

	while(nums.length > 1 ) {
		const first = nums.shift().toString();
		const last = nums.pop().toString();
		concatValues += parseInt(first + last);
		console.log(first)
		console.log(last)
	}

	if (nums.length) { // If there's a remaining element
		concatValues += nums[0];
	}
	return concatValues;

};