// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
//
// 	Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
//
// 	You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
//
//
//
// 	Example 1:
//
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// 	call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// 	Example 2:
//
// Input: n = 1, bad = 1
// Output: 1


/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
	/**
	 * @param {number} n Total number of versions
	 * @return {number} The first bad version
	 */
	return function(n) {
		// Initialize pointers to the first and last versions
		let left = 1, right = n;

		// Loop until we've narrowed down the search range to a single version
		while (left < right) {
			// Compute the middle version
			const mid = Math.floor((left + right) / 2);
			// Check if the middle version is bad
			if (isBadVersion(mid)) {
				// If it is, set the upper bound of the search range to the middle version
				right = mid;
			} else {
				// Otherwise, set the lower bound of the search range to the next version
				left = mid + 1;
			}
		}

		// At this point, left and right should be pointing to the first bad version
		return left;
	};
};
