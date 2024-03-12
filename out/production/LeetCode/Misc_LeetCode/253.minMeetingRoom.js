
/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {

	let starts = intervals.map((a) => a[0]);
	let ends = intervals.map((a) => a[1]);
	console.log(starts)
	console.log(ends)

	let count = 0;
	let j = 0;

	starts.sort((a,b) => a - b);
	ends.sort((a,b) => a - b);
	console.log("----------------")
	console.log(starts)
	console.log(ends)

	for(let i = 0 ; i < starts.length; i++){
		count++;

		if(starts[i] >= ends[j]){
			count--;
			j++;
		}

	}

	return count;


}

console.log(minMeetingRooms([[0,30],[5,10],[15,20]]))


