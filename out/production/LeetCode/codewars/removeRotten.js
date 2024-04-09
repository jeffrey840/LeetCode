

function removeRotten(fruits){
	if (!fruits || fruits.length === 0) {
		return [];
	}

	// Map through the array, replace rotten fruits with fresh ones
	return fruits.map(fruit => {
		// Check if the fruit is rotten. If so, remove 'rotten' and convert to lowercase
		if (fruit.startsWith('rotten')) {
			return fruit.replace('rotten', '').toLowerCase();
		}
		// If the fruit is not rotten, return as is but ensure it's in lowercase
		return fruit.toLowerCase();
	});
}

