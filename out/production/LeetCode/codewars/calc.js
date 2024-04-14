function calc(str){
	// Step 1 & 2: Convert to ASCII and join
	let total1 = str.split('').map(char => char.charCodeAt(0)).join('');

	// Step 3: Replace 7 with 1
	let total2 = total1.replace(/7/g, '1');

	// Step 4: Sum of digits for total1 and total2
	let sumTotal1 = total1.split('').reduce((acc, digit) => acc + Number(digit), 0);
	let sumTotal2 = total2.split('').reduce((acc, digit) => acc + Number(digit), 0);

	// Step 5: Calculate and return the difference
	return sumTotal1 - sumTotal2;
}