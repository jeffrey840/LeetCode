function findRestaurant(list1, list2) {
	// Initialize the mapping object
	let map = {};
	console.log("Building map from list1...");
	for (let i = 0; i < list1.length; i++) {
		map[list1[i]] = i;
		console.log(`Mapped ${list1[i]} to index ${i}`);
	}

	// Initialize the results array and set the minimum sum to a very high value initially
	let res = [];
	let min_sum = Infinity;
	let sum;

	console.log("Evaluating list2 for common restaurants with minimum index sums...");
	// Iterate over list2 while there is still a chance to find a lower index sum
	for (let j = 0; j < list2.length && j <= min_sum; j++) {
		if (map.hasOwnProperty(list2[j])) {
			sum = j + map[list2[j]]; // Calculate the current sum of indices
			console.log(`Found common restaurant ${list2[j]} at list2 index ${j} with combined index sum ${sum}`);

			if (sum < min_sum) {
				res = []; // Clear the results array for a new minimum sum
				res.push(list2[j]);
				min_sum = sum; // Update the minimum sum found
				console.log(`New minimum index sum ${min_sum} found with restaurant ${list2[j]}`);
			} else if (sum === min_sum) {
				res.push(list2[j]);
				console.log(`Restaurant ${list2[j]} also has the minimum index sum ${min_sum} and is added to results`);
			}
		}
	}

	console.log(`Final list of restaurants with minimum index sum: ${res}`);
	return res; // Return the results array
}

// Example usage
let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
let list2 = ["KFC", "Shogun", "Burger King"];
console.log(findRestaurant(list1, list2));  // Expected Output: ["Shogun"]
