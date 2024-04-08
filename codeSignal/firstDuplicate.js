function solution(a) {
	let set1 = new Set()

	for(let i =0;i < a.length; i++) {
		if(set1.has(a[i])) {
			return a[i]
		}
		else{
			set1.add(a[i])
		}
	}
	return -1;

}
