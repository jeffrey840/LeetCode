

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

// separate white space,
// nake inti array
// reverse each array
// return to string


	let array = s.split(' ')


	for(let i =0;i <array.length;i++) {

		array[i] = array[i].split('').reverse().join('')

	}
	return array.join(' ')
};

