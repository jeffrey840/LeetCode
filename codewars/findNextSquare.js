function findNextSquare(sq) {
	// Return the next square if sq is a perfect square, -1 otherwise
	const root = Math.sqrt(sq);

	if(root % 1 === 0) {
		return Math.pow(root + 1, 2);
	}
	return -1;

}

