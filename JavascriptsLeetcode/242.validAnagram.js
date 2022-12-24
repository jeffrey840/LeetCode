// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// 	An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//
//
//
// 	Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false
//

/*
create a map to keep track of how many instances of a letter
are inside the original string and compare that to the other string
	ex: s="two", t="to"
	char | count
	t       1
	w       1
	o       1
* */

// var isAnagram = function (s, t) {
// 	if (s.length !== t.length) return false;
// 	const hashTable = {};
//
// 	for (let i = 0; i < s.length; i++) {
// 		if (!hashTable[s[i]]) {
// 			hashTable[s[i]] = 0;
// 		}
// 		hashTable[s[i]]++;
// 	}
//
// 	for (let j = 0; j < t.length; j++) {
// 		if (!hashTable[t[j]]) {
// 			return false;
// 		}
// 		hashTable[s[j]]--;
// 	}
//
// 	return true;
// };
// console.log(isAnagram("sets", "test"));

var isAnagram = function(s, t) {

	if(s.length !== t.length) {
		return false
	}
	const sLetters = {};

	for (let char of s) {
		if (!sLetters[char]) {
			sLetters[char] = 1
		} else {
			sLetters[char]++
		}
	}

	for (let char of t) {
		if (!sLetters[char]) {
			return false
		}

		if (sLetters[char]) {
			sLetters[char]--
		}

		if (sLetters[char] === 0) {
			delete sLetters[char]
		}
	}
	return Object.keys(sLetters).length === 0
};



