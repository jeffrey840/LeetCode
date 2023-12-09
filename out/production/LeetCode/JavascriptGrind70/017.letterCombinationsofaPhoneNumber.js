// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
//
// 	A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//🟩 [a_,a_,a_,b_,b_,b_,c_,c_,c_,] = 2
//🟩 [_d,_e,_f,_d,_e,_f,_d,_e,_f,] = 3
// 	Example 1:
//
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:
//
// Input: digits = ""
// Output: []
// Example 3:
//
// Input: digits = "2"
// Output: ["a","b","c"]

//seperate them as a jashmap


var letterCombinations = function(digits) {

	//this is an edge case
	if(digits.length === 0) return [];
//	global result
	const result = [];

//	alpha hash map
	const alpha = {
		'2': 'abc',
		'3': 'edf',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz'
	}

//	dfs recursive helper
	const dfs = (i, digits, slate) => {
	//	base case
		if (i === digits.length) {
			//join it and then push it into result
			result.push(slate.join(''));
			return;
		}
	//	dfs recursive case
	//	this will give us abc for the first one
	//	ehn we increment i, it is going to return def
		let chars = alpha[digits[i]];

		for (let char of chars) {
			//adding a to the slate
			slate.push(char);
			dfs(i + 1,digits, slate);
			//pop it off from slate
			slate.pop();
		}
	}
	dfs(0,digits,[]);
	return result;
};
