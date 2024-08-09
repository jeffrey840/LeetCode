function divisibleByLast(n) {
	// TODO
	let str = n.toString().split('')
	const arr = [false];
	for(let i = 1; i < str.length; ++i){
		if(str[i] % str[i-1] === 0){
			arr.push(true);
		}else{
			arr.push(false);
		};
	};
	return arr;
}




