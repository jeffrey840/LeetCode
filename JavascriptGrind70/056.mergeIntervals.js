// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
//
//
//
// 	Example 1:
//
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// 	Example 2:
//
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
//
//
// 	Constraints:
//
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

//imagine a timeline table




var merge = function(intervals) {
	if(intervals.length <= 1) return intervals;
	// sort the array so earlier start times are at the beginning
	intervals = intervals.sort((a,b) => a[0] - b[0])
	let output = [intervals[0]];
	let current = output[0];
	// If the current interval's end time is greater than or equal
	// to the next interval's start time, then we know there is an
	// overlap and we merge them.
	// If there is no overlap, then we add the next interval to the
	// list of intervals in our output array and repeat the process
	// until we go through the entire list of intervals.
	for(let i = 1; i< intervals.length;i++) {
		const next = intervals[i]
		if(current[1] >= next[0]) {
			current[1] = Math.max(current[1], next[1]);
		} else {
			current = next;
			output.push(current);
		}
	}
	return output;
};

