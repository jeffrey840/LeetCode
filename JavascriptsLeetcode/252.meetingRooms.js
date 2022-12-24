// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.
//
// 	Example 1:
//
// Input: [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:
//
// Input: [[7,10],[2,4]]
// Output: true

/*
given an array of arrays

if the arrays are overlapping it will return false
else return true



* */

function canAttendMeetings(intervals) {

	//if there is only 1 slot it can return true
	if (intervals.length < 2) return true;

	//sorting ascending order
	intervals.sort((a,b) => {return a[0] - b[0]});


	let end = intervals[0][1];


	for (let i = 1; i < intervals.length; i++) {
		//if end is greater than your start return false
		if (end > intervals[i][0]) return false;
		//updates to maximum
		if (end < intervals[i][1]) end = intervals[i][1];
	}
	return true;
}



