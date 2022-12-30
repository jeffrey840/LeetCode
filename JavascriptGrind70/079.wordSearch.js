// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
//
// 	The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
//
//
// 	Example 1:
//
//
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:
//
//
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:
//
//
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
//
//
// Constraints:
//
// 	m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

//else if for:
//column < 0
//row < 0
//column > board[0].length
//row > board.length

let exist = function(board, word) {

	for(let r = 0; r < board.length; r++){
		for(let c = 0; c < board[0].length;c++) {
			if (board[r][c] === word[0] && dfs(r,c,0)) return true;
		}
	}

	return false;

	function dfs(r,c,i) {
		if(word.length === i) return true;
		if(r >= board.length || r < 0 || c < 0 || c >= board[0].length || board[r][c] !== word[i]) return false;
		//the correct value to the left wil be updated toa hash
		board[r][c] = '#';

		if(dfs(r + 1, c, i + 1) || dfs(r - 1,c, i + 1) || dfs(r,c + 1,i + 1) || dfs(r,c - 1,i + 1)) return true;

		board[r][c] = word[i];
	}
};

