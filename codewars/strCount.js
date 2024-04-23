function strCount(obj){

	let count = 0;

	function countString(item) {
		for(let key in item) {
			if(typeof item[key] === 'string') {
				count++
			} else if(typeof item[key] === 'object' && item[key] !== null) {
				countString(item[key])
			}
		}
	}

	countString(obj)
	return count

}