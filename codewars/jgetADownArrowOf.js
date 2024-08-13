function getADownArrowOf(n) {

	if (n < 1) return "";

	let result = [];

	for (let i = 0; i < n; i++) {
		let line = " ".repeat(i);

		// Create the ascending part of the sequence
		for (let j = 1; j <= n - i; j++) {
			line += (j % 10).toString();
		}

		// Create the descending part of the sequence
		for (let j = n - i - 1; j >= 1; j--) {
			line += (j % 10).toString();
		}

		result.push(line);
	}

	// Join all lines with newline characters
	return result.join("\n");


}