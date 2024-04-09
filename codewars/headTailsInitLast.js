// Returns the first element of an array
function head(arr) {
	return arr[0];
}

// Returns the array without the first element
function tail(arr) {
	return arr.slice(1);
}

// Returns the array without the last element
function init(arr) {
	return arr.slice(0, -1);
}

// Returns the last element of an array
function last(arr) {
	return arr[arr.length - 1];
}