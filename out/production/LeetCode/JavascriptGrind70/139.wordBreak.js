// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
//
// 	Note that the same word in the dictionary may be reused multiple times in the segmentation.
//
//
//
// 	Example 1:
//
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// 	Example 2:
//
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// 	Note that you are allowed to reuse a dictionary word.
// 	Example 3:
//
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
//
//
// Constraints:
//
// 	1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// 	All the strings of wordDict are unique.

var wordBreak = function(s, wordDict) {

	//create table and set it to array, set it to length of s + 1
	const table = new Array(s.length + 1).fill(false);

	table[0] = true;

	for(let i = 0;i < table.length;i++) {
		if (table[i] === false) continue;

		for (let j = i + 1;j< table.length;j++) {

			//check if word is in dictionary
			if(wordDict.includes(s.slice(i,j))) {
				table[j] = true;
			}
		}
	}
	return table[table.length - 1];
};
