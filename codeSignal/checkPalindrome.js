function solution(inputString) {

	let left = 0
	let right = inputString.length -1

	while(left < right) {
		if(inputString[left] === inputString[right]) {
			left ++
			right--
		} else{
			return false
		}

	}
	return true

}
