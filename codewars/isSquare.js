var isSquare = function(n){

	if(n<0) return false;

	let root = Math.sqrt(n);
	return root % 1 === 0;

}