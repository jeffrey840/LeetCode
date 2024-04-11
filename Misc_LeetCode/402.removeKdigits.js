
var removeKdigits = function(num, k) {

	let stack = [];

	for (let i = 0; i < num.length; i++) {
		// While stack is not empty and the top of the stack is greater than the current element
		// and we still have digits to remove (k > 0), pop the stack.
		while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
			stack.pop();
			k--;
		}
		stack.push(num[i]);
	}

	// Remove remaining digits from the end if k > 0
	while (k-- > 0) {
		stack.pop();
	}
	console.log(stack);
	// Remove leading zeros and convert the stack back to string
	let result = stack.join('').replace(/^0+/, '');
	console.log(`after ${result}`)
	// Return result, or "0" if result is empty
	return result === '' ? '0' : result;


};
console.log(removeKdigits([1,4,3,2,2,1,9], 3))