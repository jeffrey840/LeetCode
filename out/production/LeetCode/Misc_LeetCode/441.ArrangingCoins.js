

/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n){
	let k = 0; // Initialize the number of complete rows
	let currentRow = 1; // The number of coins needed for the current row

	while (n >= currentRow) {
		console.log(`Row ${k + 1}: Needs ${currentRow} coins, ${n} available`);
		n -= currentRow; // Subtract the coins used for the current row from the total
		k++; // Increment the number of complete rows
		currentRow++; // Increment the number of coins needed for the next row
	}

	console.log(`Total complete rows: ${k}`);
	return k;
}


// Example usage:
const n = 10;
console.log(`Number of coins: ${n}`);
console.log(`Number of complete rows: ${arrangeCoins(n)}`);