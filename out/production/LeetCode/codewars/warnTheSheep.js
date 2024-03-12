



function warnTheSheep(queue) {

//   print the dheeps number tha is cosest to me
//   im position. queue -1 so
//   print wolf element position

	// console.log(queue.indexOf("wolf"))

	// Find the position of the wolf in the queue
	const wolfIndex = queue.indexOf("wolf");

	// If the wolf is at the end of the queue
	if (wolfIndex === queue.length - 1) {
		return "Pls go away and stop eating my sheep";
	} else {
		// Calculate the sheep's position in danger by counting from the end of the queue
		const sheepInDanger = queue.length - wolfIndex - 1;
		return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`;
	}

}

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
//
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],))
//
// console.log(warnTheSheep(["wolf"]))

console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))