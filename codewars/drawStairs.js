function drawStairs(n) {
	let stairs = '';
	for(let i = 0; i < n; i++) {
		stairs += ' '.repeat(i) + 'I';
		if(i < n - 1) {
			stairs += '\n';
		}
	}
	return stairs
}

console.log(drawStairs(5))