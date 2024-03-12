

function minTransfers(transactions) {
	// Step 1: Calculate net amount each person owes or is owed
	const balance = {};
	transactions.forEach(([from, to, amount]) => {
		if (!balance[from]) balance[from] = 0;
		if (!balance[to]) balance[to] = 0;
		balance[from] -= amount;
		balance[to] += amount;
	});
	console.log(balance)

	// Filter out those who are settled (net balance is 0)
	const debts = Object.values(balance).filter(b => b !== 0);

	// Step 2: Recursive function to find minimum transactions
	function settle(debts, start = 0) {
		// Skip settled persons
		while (start < debts.length && debts[start] === 0) start++;

		if (start === debts.length) return 0; // Base case: everyone is settled

		let minTransactions = Infinity;
		for (let i = start + 1; i < debts.length; i++) {
			if (debts[start] * debts[i] < 0) { // Only try to settle if one is owed and one owes
				// Simulate transaction
				debts[i] += debts[start];
				console.log(debts[i])
				minTransactions = Math.min(minTransactions, 1 + settle(debts, start + 1));
				// Undo transaction for next iteration
				console.log(debts[i])
				debts[i] -= debts[start];
			}
		}
		// console.log(minTransactions)
		return minTransactions;
	}

	// Step 3: Start the recursive debt settling
	console.log("-----")
	return settle(debts);
}


console.log( "Answer : "+ minTransfers([[0,1,10],[2,0,5]]))
// console.log(minTransfers([[0,1,10],[1,0,1],[1,2,5],[2,0,5]]))


