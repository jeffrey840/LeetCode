

function stairsIn20(s){
//   weekdays = 7
//   ehach weekday has 1 array of numbers,
//   for loop to iterate the weekdays,
//   for loop to iterate over all teh numbers and add them
// then add all the totals

	// Initialize a variable to keep track of the total stairs climbed in a year
	let totalStairsInYear = 0;

	// Iterate through each day of the week
	for (let i = 0; i < s.length; i++) {
		// Get the array representing the stairs climbed on this day of the week
		let day = s[i];
		// Iterate through this array to sum up all the stairs climbed on this day
		for (let j = 0; j < day.length; j++) {
			totalStairsInYear += day[j];
		}
	}

	// Calculate the 20 year estimate based on the total stairs climbed in a year
	let twentyYearEstimate = totalStairsInYear * 20;

	// Return the 20 year estimate
	return twentyYearEstimate;
}

