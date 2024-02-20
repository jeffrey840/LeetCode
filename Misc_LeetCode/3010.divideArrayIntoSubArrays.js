

function minimumCost(nums) {


	let minSum = Infinity;

	// There are two splits needed to divide the array into three parts,
	// so we iterate through all possible positions for these splits.
	for (let split1 = 1; split1 < nums.length - 1; split1++) {
		for (let split2 = split1 + 1; split2 < nums.length; split2++) {
			// The cost of the subarrays is determined by the sum of
			// the first elements of the three subarrays.
			const cost = nums[0] + nums[split1] + nums[split2];
			minSum = Math.min(minSum, cost);
		}
	}

	return minSum;


}

