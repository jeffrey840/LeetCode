/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {

	const startingCities = new Set();
	const destinationCities = new Set();

	// Populate sets with starting and destination cities
	for (const path of paths) {
		startingCities.add(path[0]);
		destinationCities.add(path[1]);
	}

	// Find the destination city by checking which city is not a starting city
	for (const city of destinationCities) {
		if (!startingCities.has(city)) {
			return city;
		}
	}

	return null; // This line should never be reached due to problem constraints


};