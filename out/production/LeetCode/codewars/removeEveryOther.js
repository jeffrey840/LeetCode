
function removeEveryOther(array) {
	// Iterate over the array
	return array.filter((el, index) => index % 2 ===0)
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
