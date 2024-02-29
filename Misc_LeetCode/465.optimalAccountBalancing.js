

function minTransfers(transactions) {
	// Step 1: Calculate net amount each person owes or is owed
	const balance = {};
	transactions.forEach(([from, to, amount]) => {
		if (!balance[from]) balance[from] = 0;
		if (!balance[to]) balance[to] = 0;
		balance[from] -= amount;
		balance[to] += amount;
	});

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
				minTransactions = Math.min(minTransactions, 1 + settle(debts, start + 1));
				// Undo transaction for next iteration
				debts[i] -= debts[start];
			}
		}
		return minTransactions;
	}

	// Step 3: Start the recursive debt settling
	return settle(debts);
}