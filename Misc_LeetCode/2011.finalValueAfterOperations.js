
var finalValueAfterOperations = function(operations) {

	let count = 0

	operations.forEach(operation => {
		if (operation.includes('--')) {
			count -= 1;
		} else if(operation.includes('++')) {
			count += 1;
		}
	});
	return count

};