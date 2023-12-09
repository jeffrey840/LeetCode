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
	var len = heights.length;
	var stack = [];
	var max = 0;
	var h = 0;
	var w = 0;

	for (var i = 0; i <= len; i++) {
		while (stack.length && (i === len || heights[i] <= heights[stack[stack.length - 1]])) {
			h = heights[stack.pop()];
			w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
			max = Math.max(max, h * w);
		}
		stack.push(i);
	}

	return max;
};

