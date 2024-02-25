

function warnTheSheep(queue) {



	// console.log(queue.indexOf("wolf"))
	if(queue.indexOf("wolf") === queue.length - 1) {
		console.log("Pls go away and stop eating my sheep")
	}



	let sheepIndanger = queue.indexOf("wolf") + 1
	let myPov = queue.length - sheepIndanger

	return "Oi! Sheep number "  + myPov + "! You are about to be eaten by a wolf!"


}


// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
//
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],))
//
// console.log(warnTheSheep(["sheep", "sheep", "wolf"]))

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))