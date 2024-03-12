


function maxDiff(list) {
	if(list.length === 0) return 0
	else {
		return Math.max(...list) - Math.min(...list)
	}
};

console.log(maxDiff([-1,1,2,3]))
