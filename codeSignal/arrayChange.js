function solution(inputArray) {

	let move = 0;

	for(let i = 0; i < inputArray.length;i++) {

		if(inputArray[i] <= inputArray[i-1]) {

			const incrementNeeded = inputArray[i - 1] - inputArray[i] + 1;
			inputArray[i] += incrementNeeded;
			move+= incrementNeeded
		}

	}
	return move;

}
