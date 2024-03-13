
function well(x){

	const goodCount = x.filter(idea => idea === 'good').length;

	// Return based on the count of 'good'
	if (goodCount === 0) {
		return "Fail!";
	} else if (goodCount > 2) {
		return "I smell a series!";
	} else {
		return "Publish!";
	}

}

