function formatMoney(amount){

	let formattedAmount = amount.toFixed(2);

	// Prepend the dollar sign
	return `$${formattedAmount}`;

}