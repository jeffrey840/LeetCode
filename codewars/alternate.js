function alternate(items) {
	// Handle the case of an empty list
	if (items.length === 0) return null;

	// Iterate through the list and perform the OR operation
	for (let i = 0; i < items.length; i++) {
		if (items[i]) {
			return true;
		}
	}

	// If no true value was found, return false
	return false;
