// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
//
// 	You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
//
// 	To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
//
// 	Return the modified image after performing the flood fill.
//
//
//
// 	Example 1:
//
//
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
// 	Example 2:
//
// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.

var floodFill = function(image, sr, sc, color) {

	//Start with the pixel at sr, sc. This is the starting pixel for the flood fill.
	//Store the color of the starting pixel in a variable originalColor.
	let originalColor = image[sr][sc];

	//If originalColor is equal to color, return the image as is because there's no need to make any changes.
	if (originalColor === color) return image;

	//Call the dfs function with the parameters image, sr, sc, originalColor, and color. This function will perform the DFS.
	dfs(image, sr, sc, originalColor, color);
	return image;
};


	//In the dfs function, check if the current pixel is within the bounds of the grid and if its color is equal to originalColor.
var dfs = function(image, i, j, originalColor, color) {

	//If either condition is not met, return.
	if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== originalColor) return;

	//If both conditions are met, change the color of the current pixel to color.
	image[i][j] = color;

	//Make recursive calls to dfs for the up, down, left, and right pixels.
	//
	// Repeat steps for each pixel visited in the DFS.
	dfs(image, i + 1, j, originalColor, color);
	dfs(image, i - 1, j, originalColor, color);
	dfs(image, i, j + 1, originalColor, color);
	dfs(image, i, j - 1, originalColor, color);
};
