
var mapOfNumbers = {
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = function (digits) {
	// Return early if no digits were supplied
	if (!digits.length) {
		return [];
	}

	function getLetterCombinations(digits, previousCombinations) {
		// Initialise an array to store the possibilties for this digit
		let newPossibilities = [];

		// Loop through the previous iteration's combinations
		for (let previousCombination of previousCombinations) {
			// Loop through the possible letters for this number
			for (let possibleLetter of mapOfNumbers[digits[0]]) {
				// Add a combination of the previous set with the current letters to the array
				newPossibilities.push(
					previousCombination.concat(possibleLetter)
				);
			}
		}

		// If there are more digits, run the function again, otherwise return the combinations
		return digits.length > 1
			? getLetterCombinations(digits.slice(1), newPossibilities)
			: newPossibilities;
	}

	return getLetterCombinations(digits.toString(), ['']);
};