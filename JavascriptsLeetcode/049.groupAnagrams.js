// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//
// 	An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// 	typically using all the original letters exactly once.
// 	Example 1:
//
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
//
// Input: strs = [""]
// Output: [[""]]
// Example 3:
//
// Input: strs = ["a"]
// Output: [["a"]]
//
//
// Constraints:
//
// 	1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

//in put is an array of strings
// the output has to be and array of arrays that contain a strings that hold the similar letters
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

let groupAnagrams = function(strs) {
	let obj = {};

	for(let i of strs) {

		//while it looping sort the words to see if it's inside the object
		let key =  i.split('').sort().join('')
		//if its is not place the string into an array
		if(!obj[key]) {
			obj[key] = [i]
		} else {
			obj[key].push(i)
		}
	}
	return (Object.values(obj))
};

