


function diagonalDifference(arr) {
	// Write your code here

	// check if arr has 3 elements
	// if not move to next arr
	// get first elent from eth first  arr[i][0]
	// go to next arr get arr[i+1]{1}
	// next arr get arr[1+2][2]

	// save number num 1

	// get last elent from eth first  arr[i][length - 1]
	// go to next arr get arr[i+1][length-2]
	// next arr get arr[1+2][length-3]

	// console.log(arr[0][0])
	// console.log(arr[1][1])
	// console.log(arr[2][2])

	// console.log(arr[0][arr.length - 1])
	// console.log(arr[1][arr.length - 2])
	// console.log(arr[2][arr.length- 3])

	let leftDiagonalSum = 0;
	let rightDiagonalSum = 0;

	for (let i = 0; i < arr.length; i++) {
		// Summing the primary diagonal
		leftDiagonalSum += arr[i][i];
		// Summing the secondary diagonal
		rightDiagonalSum += arr[i][arr.length - 1 - i];
	}

	// Calculating the absolute difference between the two sums
	return Math.abs(leftDiagonalSum - rightDiagonalSum);


}