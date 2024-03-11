/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {

	let maxProfit = 0;
	let minPrice = prices[0];

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			// Update minPrice if a new minimum is found
			minPrice = prices[i];
		} else {
			// Calculate the profit by selling at the current price and compare with maxProfit
			let profit = prices[i] - minPrice;
			if (profit > maxProfit) {
				maxProfit = profit;
			}
		}
	}

	return maxProfit;

}