/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
        let i = 0;
    while (i < arr.length) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0); // Insert 0 at the current index
            arr.pop(); // Remove the last element to maintain array size
            i += 1; // Skip the next zero since it's a duplicate
        }
        i += 1;
    }
};