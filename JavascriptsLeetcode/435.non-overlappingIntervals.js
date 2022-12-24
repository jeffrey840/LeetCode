// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
//
//
//
// 	Example 1:
//
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// 	Example 2:
//
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// 	Example 3:
//
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
//
//
// 	Constraints:
//
// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104

/**

 sorting the input array by the  second value of the array in the array
 ex: [[1,2],[3,4]] second value: 2 and 4


 */


var eraseOverlapIntervals = function(intervals) {

	//sorting by the intervals second value
	intervals.sort((a,b) => a[1] - b[1]);

	//count will increase if there is an overlap
	let count = 0;
	let prev = 0;

	for (let i = 1;i < intervals.length;i++) {
		let current = intervals[i];
		//if current is less than the intervals[prev](second val)
		//the count will increase
		if (current[0] < intervals[prev][1]) {
			count++
		} else {
			//updates prev to i
			prev = i;
		}
	}
	return count;
};

