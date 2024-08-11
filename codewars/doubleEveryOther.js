function doubleEveryOther(a) {
	for(let i = 0; i < a.length; i++) {
		if(i % 2 === 1) {
			a[i] = a[i] * 2
		}

	}
	return a
}

console.log(doubleEveryOther([1,2,3,4]))