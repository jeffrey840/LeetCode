
String.prototype.replicate = function(times) {

	if (times <= 0) return '';

	let result = '';
	for (let i = 0; i < times; i++) {
		result += this;
	}

	return result;


}


