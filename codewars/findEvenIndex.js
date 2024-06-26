function findEvenIndex(arr) {
	let totalSum = arr.reduce((acc, num) => acc + num, 0); // Step 1
	console.log("Total Sum:", totalSum);

	let leftSum = 0; // Step 2

	for (let i = 0; i < arr.length; i++) { // Step 3
		totalSum -= arr[i]; // Right sum for the current index

		console.log(`Index: ${i}, Left Sum: ${leftSum}, Right Sum: ${totalSum}`);

		if (leftSum === totalSum) { // Check if left sum equals right sum
			console.log(`Match found at index ${i}`);
			return i; // Return the current index
		}

		leftSum += arr[i]; // Update the left sum
	}

	console.log("No match found");
	return -1; // Step 4
}

// Test cases
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // Should return 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // Should return 1
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // Should return 0
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // Should return -1