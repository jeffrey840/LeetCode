


function fixTheMeerkat(arr) {

	if (arr.length >= 3) {
		let first = arr.shift(); // Remove the first element
		let third = arr.splice(1, 1)[0]; // Remove the new second element (originally third), adjusting for the shift

		arr.unshift(third); // Add the third element to the beginning
		arr.push(first); // Add the first element to the end
	}
	return arr;


}


console.log(fixTheMeerkat(["tail", "body", "head"]))

