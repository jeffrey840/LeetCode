
function toNumberArray(arr) {

	let numberArray = arr.map(function(item) {
		return parseFloat(item);
	});

	return numberArray;
}

console.log(toNumberArray(["1.1","2.2","3.3"]))