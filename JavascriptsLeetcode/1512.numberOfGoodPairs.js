function numIdenticalPairs(nums) {
	let count = 0;// count is initialized to zero. This variable will keep track of the number of good pairs.
	let frequencyMap = {};//This will store the frequency of each number we encounter.

	for (let num of nums) {//For every num in nums, we'll do the following:

		//If the number is already in frequencyMap
		if (frequencyMap[num]) {
			count += frequencyMap[num];//We increment our count by the frequency of that number.
			frequencyMap[num]++;//then increment the frequency of that number in the frequencyMap
		} else {//If the number isn't in frequencyMap
			frequencyMap[num] = 1;//add it with a value of 1, indicating that we've seen it once.
		}
	}




	return count;
}
