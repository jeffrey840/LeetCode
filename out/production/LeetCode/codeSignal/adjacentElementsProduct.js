function solution(inputArray) {

	let largest = -Infinity

	for(let i =0;i < inputArray.length -1;i++) {
		const currentProduct = inputArray[i] * inputArray[i+1]

		largest = Math.max(largest, currentProduct)
	}
	return largest
}
