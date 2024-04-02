/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
	const maxCandies = Math.max(...candies);
	console.log(maxCandies)
	// Create a new array to store whether each kid could have the greatest number of candies
	const canHaveMostCandies = candies.map(candy => candy + extraCandies >= maxCandies);

	// Return the array of boolean values
	return canHaveMostCandies;
};