function blowCandles(str) {
	let candles = str.split('').map(Number); // Convert string to array of numbers
	let totalBlows = 0;
	let index = 0; // Start from the first candle

	// Keep processing while there are candles to blow
	while (index < candles.length) {
		if (candles[index] > 0) { // Check if the current candle needs blowing
			totalBlows++;
			// Reduce the strength of up to three consecutive candles
			for (let j = index; j < index + 3 && j < candles.length; j++) {
				if (candles[j] > 0) {
					candles[j]--;
				}
			}
		} else {
			index++; // Move to the next candle if the current one is extinguished
		}
	}

	return totalBlows;
}