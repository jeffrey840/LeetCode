// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
//
//
//
// Example 1:
//
//
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// 	Example 2:
//
//
// Input: heights = [2,4]
// Output: 4


//brute force
// 0(n^2 * n)
var largestRectangleArea = function(heights) {
	let max = 0;
	for (let i = 0;i < heights.length;i++) { //start point or the rectangle
		for(let j = i; j < heights.length;j++) {
			const min = Math.min(...heights.slice(i,j + 1))
			max = Math.max(max, min * (j - i + 1) )
		}
	}
	return max;
};


