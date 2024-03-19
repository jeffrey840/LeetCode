/**
 * Initializes the object with the vector nums.
 * Stores only non-zero values with their indices for efficient storage.
 * @param {number[]} nums
 */
var SparseVector = function(nums) {
	this.numsMap = new Map(); // Efficient storage for non-zero elements
	nums.forEach((value, index) => {
		if (value !== 0) {
			this.numsMap.set(index, value); // Store only non-zero elements
		}
	});
	console.log("Initialized vector:", Array.from(this.numsMap.entries())); // Log the stored non-zero elements
};

/**
 * Compute the dot product between the instance of SparseVector and vec.
 * Iterates through non-zero elements and calculates sum of products for matching indices.
 * @param {SparseVector} vec - Another SparseVector
 * @return {number} - The dot product
 */
SparseVector.prototype.dotProduct = function(vec) {
	let sum = 0;
	// Iterate through non-zero elements of this vector
	for (let [index, value] of this.numsMap) {
		if (vec.numsMap.has(index)) { // Check if the other vector has a non-zero value at this index
			let product = value * vec.numsMap.get(index); // Calculate product
			console.log(`Multiplying elements at index ${index}: ${value} * ${vec.numsMap.get(index)} = ${product}`);
			sum += product; // Add to cumulative sum
		}
	}
	console.log("Dot product result:", sum);
	return sum;
};

// Example usage with added console logs to understand the process
let nums1 = [1, 0, 0, 2, 3];
let nums2 = [0, 3, 0, 4, 0];
let v1 = new SparseVector(nums1);
let v2 = new SparseVector(nums2);
let ans = v1.dotProduct(v2); // Should calculate and log intermediate steps and result
console.log(ans)
// The output will show the initialization of each vector, the calculation steps for the dot product,
// and the final dot product result.
