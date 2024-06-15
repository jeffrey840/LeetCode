function gcd(a, b) {
	while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

function relativelyPrime(n, arr) {
	return arr.filter(x => gcd(n, x) === 1);
}
