String.prototype.toJadenCase = function () {
	// Use 'this' to refer to the string instance on which the method is called
	return this.split(' ').map(word => {
		return word.charAt(0)
			.toUpperCase() + word.slice(1)
			.toLowerCase();
	}).join(' ');
};