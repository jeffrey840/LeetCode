// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
//
// You must do it in place.
//
//
//
// 	Example 1:
//
//
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:
//
//
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
//
//
// Constraints:
//
// 	m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
//
//
// Follow up:
//
// 	A straightforward solution using O(mn) space is probably a bad idea.
// 	A simple improvement uses O(m + n) space, but still not the best solution.
// 	Could you devise a constant space solution?

// store the end result
//

//creating a helper function
//keeping row and the column fixed

const setZeros = (r,c,matrix) => {

	for(let i = 0;i < matrix.length;i++) {
		matrix[i][c] = 0;
	}

	for(let i = 0; i < matrix[0].length; i++) {
		matrix[r][i] = 0;
	}
}

let setZeroes = function(matrix) {
	//zerosA is an empty array to store the zeros address
	const zerosA = [];
//collect all the adres of the zeros
	for(let r = 0; r < matrix.length;r++) {//checking row
		for(let c = 0; c < matrix[0].length; c++) {// checking column
			//check to see if this particular sub has a zero
			if(matrix[r][c] === 0) zerosA.push([r,c]);//if its zero push the zero to teh zeros address
		}
	}

	//iterate over the zeros address and set zeros
	for(let address of zerosA) {
		let row = address[0];
		let col = address[1];
		setZeros(row,col,matrix);
	}
};

