
function getAverage(marks){
	return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}


console.log(getAverage([2, 2, 2, 2]));
