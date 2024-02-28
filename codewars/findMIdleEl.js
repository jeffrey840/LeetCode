

function gimme (a) {


	return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}


console.log(gimme([5, 10, 14]))
