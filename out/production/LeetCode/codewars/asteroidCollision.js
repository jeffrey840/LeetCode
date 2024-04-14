function asteroidCollision(asteroids) {
	const stack = [];

	for (let asteroid of asteroids) {
		console.log("Considering asteroid:", asteroid);

		// Asteroid moving right: always add it to the stack
		if (asteroid > 0) {
			console.log("Right-moving asteroid, adding to stack.");
			stack.push(asteroid);
			continue;
		}

		// Asteroid moving left - potential collisions!
		console.log("Left-moving asteroid, checking for collisions.");
		while (stack.length > 0 && stack[stack.length - 1] > 0 && -asteroid > stack[stack.length - 1]) {
			const explodedAsteroid = stack.pop();
			console.log(
				`Collision! Smaller right-moving asteroid (size ${explodedAsteroid}) explodes.`
			);
		}

		// Check for other collision scenarios:
		if (stack.length > 0 && stack[stack.length - 1] === -asteroid) {
			stack.pop();
			console.log(`Both asteroids explode (equal size: ${asteroid})`);
		} else if (stack.length === 0 || stack[stack.length - 1] < 0) {
			console.log("Left-moving asteroid survives, adding to stack.");
			stack.push(asteroid);
		}
	}

	console.log("Final surviving asteroids:", stack);
	return stack;
}

// Example run
const asteroids = [5, 10, -5, 2];
// asteroids = [8, -10, 5, 12345, -500, -2000, 10]
asteroidCollision(asteroids);
