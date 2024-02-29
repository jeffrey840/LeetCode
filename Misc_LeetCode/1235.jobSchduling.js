


/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

function jobScheduling(startTime, endTime, profit) {
	const jobs = startTime.map((start, i) => ({
		start: start,
		end: endTime[i],
		profit: profit[i]
	}));

	// Sort jobs based on end time
	jobs.sort((a, b) => a.end - b.end);

	// DP array to store the maximum profit until the ith job
	const dp = Array(jobs.length).fill(0);

	dp[0] = jobs[0].profit; // Base case

	for (let i = 1; i < jobs.length; i++) {
		let includeProfit = jobs[i].profit;
		let lastIndex = -1; // Last non-conflicting job index

		// Binary search to find the last job that doesn't conflict with jobs[i]
		let low = 0, high = i - 1;
		while (low <= high) {
			const mid = Math.floor((low + high) / 2);
			if (jobs[mid].end <= jobs[i].start) {
				lastIndex = mid;
				low = mid + 1;
			} else {
				high = mid - 1;
			}
		}

		// Add the profit of the last non-conflicting job
		if (lastIndex !== -1) {
			includeProfit += dp[lastIndex];
		}

		// Maximum profit considering the current job
		dp[i] = Math.max(dp[i - 1], includeProfit);
	}

	// The last element in dp represents the maximum profit
	return dp[jobs.length - 1];
}


