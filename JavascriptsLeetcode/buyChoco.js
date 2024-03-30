var buyChoco = function(prices, money) {
	prices.sort((a, b) => a - b); // Sort in ascending order

	let left = 0;
	let right = prices.length - 1;

	while (left < right) {
		let currentSum = prices[left] + prices[right];

		if (currentSum <= money) {
			return money - currentSum; // Found a pair with leftover money
		}
		right--; // Reduce the max price in the potential pair
	}

	return money; // No affordable pair found
};
