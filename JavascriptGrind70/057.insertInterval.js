// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
//
// 	Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
//
// Return intervals after the insertion.
//
//
//
// 	Example 1:
//
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
//
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
//
//
// 	Constraints:
//
// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// 	newInterval.length == 2
// 0 <= start <= end <= 105


//find if theres is an overlap between the intrevals and the intervals
//merge potential intervals
//set edgecase
//if interval is less than the new array then we can just add it to outpu


var insert = function(intervals, newInterval) {

	let res = [];
	let i = 0;

	const start = 0;
	const end = 1;

	//there is no overlap nbetween the current interval and the new interrval
	while(i < intervals.length && intervals[i][end] < newInterval[start]) {
		res.push(intervals[i]);
		i++;
	}

	//overlap
	while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
		//comparing the teo start values and getting the smallest
		newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
		//and update the end value which is going to the maximum between the two
		newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
		i++;
	}

	res.push(newInterval);

	while (i < intervals.length) {
		res.push(intervals[i])
		i++;
	}
	return  res;
};

