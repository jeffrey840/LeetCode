function openLockers(numberOfLockers) {
	let openLockers = [];

	// Only lockers at positions that are perfect squares will be open
	for (let i = 1; i * i <= numberOfLockers; i++) {
		openLockers.push(i * i);
	}

	return openLockers;
}

// Example usage:
console.log(openLockers(100)); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(openLockers(10));  // Output: [1, 4, 9]

