class Main {
	static main() {
		// 1. initialize a hash map
		let hashmap = {};

		// 2. insert a new (key, value) pair if it does not exist
		if (hashmap[0] === undefined) {
			hashmap[0] = 0;
		}
		if (hashmap[2] === undefined) {
			hashmap[2] = 3;
		}

		// 3. insert a new (key, value) pair or update the value of an existing key
		hashmap[1] = 1;
		hashmap[1] = 2;

		// 4. get the value of a specific key
		console.log(`The value of key 1 is: ${hashmap[1]}`);

		// 5. delete a key
		delete hashmap[2];

		// 6. check if a key is in the hash map
		if (hashmap[2] === undefined) {
			console.log("Key 2 is not in the hash map.");
		}

		// 7. get the size of the hash map
		console.log(`The size of hash map is: ${Object.keys(hashmap).length}`);

		// 8. iterate the hash map
		let entries = [];
		for (let key in hashmap) {
			if (hashmap.hasOwnProperty(key)) {
				entries.push(`(${key},${hashmap[key]})`);
			}
		}
		console.log(`Entries ${entries.join(" ")} are in the hash map.`);

		// 9. clear the hash map
		hashmap = {};

		// 10. check if the hash map is empty
		if (Object.keys(hashmap).length === 0) {
			console.log("Hash map is empty now!");
		}
	}
}

Main.main();  // Invoke the static main method
