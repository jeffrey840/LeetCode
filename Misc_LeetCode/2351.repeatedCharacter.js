

/**
 * @param {string} s
 * @return {character}
 */
function repeatedCharacter(s) {

	for(let i =0;i<=s.length;i++) {
		let c = s[i];
		for(let j = 0;j<i;j++) {
			if(s[j]=== c) {
				return c
			}
		}
	}

}

