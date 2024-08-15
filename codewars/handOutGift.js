const handedOutGifts = new Set();

function handOutGift(name) {
	if (handedOutGifts.has(name)) {
		throw new Error(`${name} has already received a gift!`);
	} else {
		handedOutGifts.add(name);
		console.log(`${name} receives a gift.`);
	}
}